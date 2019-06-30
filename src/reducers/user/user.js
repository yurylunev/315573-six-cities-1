const initialState = Object.assign({}, {
  isAuthorizationRequired: false
});

const ActionType = {
  UPDATE_AUTHORIZATION: `UPDATE_AUTHORIZATION`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`
};

const ActionCreator = {
  'requireAuthorization': (status) => ({
    type: ActionType.UPDATE_AUTHORIZATION,
    payload: status
  }),
  'saveUserInfo': (info) => ({
    type: ActionType.UPDATE_USER_INFO,
    payload: info
  })
};

const Operation = {
  loginAsync: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.saveUserInfo(response.data));
        }
      });
  },
  requireAuthorization: () => (dispatch) => dispatch(ActionCreator.requireAuthorization(true))
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.UPDATE_USER_INFO:
      return Object.assign({}, state, {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        avatarUrl: action.payload.avatar_url,
        isPro: action.payload.is_pro
      });
  }
  return state;
};

export {reducer, ActionCreator, Operation};
