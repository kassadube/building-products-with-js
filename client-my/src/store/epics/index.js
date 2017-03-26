import {helloWorld} from './helloWorld';
import {login, register} from './auth';
import {getAllQuestions, answerQuestions} from './questions';

export default [
  // auth
  login,
  register,
  helloWorld,
  getAllQuestions,
  answerQuestions,
];
