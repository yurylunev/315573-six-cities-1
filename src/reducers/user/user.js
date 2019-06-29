const initialState = Object.assign({}, {
  isAuthorizationRequired: true
});

const ActionType = {
  UPDATE_AUTHORIZATION: `UPDATE_AUTHORIZATION`
};

const ActionCreator = {
  'requireAuthorization': (status) => ({
    type: ActionType.UPDATE_AUTHORIZATION,
    payload: status
  })
};

const Operation = {
  loginAsync: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(response.status !== 200));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
  }
  return state;
};

export {reducer, ActionCreator, Operation};
