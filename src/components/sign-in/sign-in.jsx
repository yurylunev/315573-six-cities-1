import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducers/user/user";

export class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.loginAsync(this.state);
    }
  }

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.emailChange(e)}
                  required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.passwordChange(e)}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {(this.props.authorizationError) ? <div style={{
                marginTop: `20px`,
                padding: `16px`,
                color: `red`,
                border: `1px solid red`,
                backgroundColor: `lightpink`,
                borderRadius: `3px`
              }}>{this.props.authorizationError}</div> : ``}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>;
  }
}

SignIn.propTypes = {
  loginAsync: PropTypes.func.isRequired,
  authorizationError: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationError: state.USER.authorizationError,
});

const mapDispatchToProps = (dispatch) => ({
  loginAsync: (data) => dispatch(UserOperation.loginAsync(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
