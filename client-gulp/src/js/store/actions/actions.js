import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({type: ActionTypes.HELLO_WORLD});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

export const getAllQuestionsAction = () => ({
  type: ActionTypes.GET_ALL_QUESTIONS,
});

export const answerQuestionAction = payload => ({
  type: ActionTypes.ANSWER_QUESTION,
  payload,
});
export const addQuestionAction = payload => ({
  type: ActionTypes.ADD_QUESTION,
  payload,
});

