import {helloWorld} from './helloWorld';
import {login, register} from './auth';
import {getAllQuestions, answerQuestion} from './questions';

export default [
  // auth
  login,
  register,
  helloWorld,
  getAllQuestions,
  answerQuestion,
];
