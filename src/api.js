import axios from 'axios';
import {ActionCreator as UserActionCreator} from "./reducers/user/user";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(UserActionCreator.requireAuthorization(true));
    }
    if (err.response.status === 400) {
      dispatch(UserActionCreator.authorizationError(err.response.data.error));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export default createAPI;
