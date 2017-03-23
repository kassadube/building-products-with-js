
import * as ActionTypes from '../actionTypes';

const initialState = {
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data')),
  error: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        redirectToLogin: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user.token', action.payload.token);
<<<<<<< HEAD
      localStorage.setItem('user.data', JSON.stringify( action.payload.user));
=======
      localStorage.setItem('user.data', JSON.stringify(action.payload.user));
>>>>>>> 7cff0f5674e727d37bcdbd36595f67b46fe825ec
      return {
        ...action.payload,

      };
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;// {...state, ...action.payload};
  }
};
