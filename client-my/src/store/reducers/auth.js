
import * as ActionTypes from '../actionTypes';

const initialState = {
  token: null,
  user: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        redirectToLogin: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...action.payload,

      };
    default:
      return state;// {...state, ...action.payload};
  }
};
