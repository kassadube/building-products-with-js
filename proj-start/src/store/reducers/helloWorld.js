import * as ActionTypes from '../actionTypes';

const initialState = {world: 'click me!'};

export const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO_WORLD:
      return {...state,
        world: 'loading...',
      };
    case ActionTypes.HELLO_WORLD_END:
      return {...state,
        world: action.payload.world,
      };
    default:
      return state;
  }
};
