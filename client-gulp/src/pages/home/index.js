import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import _ from 'lodash';
import {getAllQuestionsAction, answerQuestionAction} from '../../store/actions';
import Question from '../../components/question';
import Navbar from '../../components/navbar';


const mapStateToProps = state => ({
  questions: state.questions.questions,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestionsAction())),
  addAnswer: (payload) => { dispatch(answerQuestionAction(payload)); },
});

export const Home = ({fetchQuestions, questions, addAnswer, user}) => {
  fetchQuestions();
  return (
    <div>
      <Navbar user={user} />
      <div>
        {questions.map(question => (<Question key={question.id} question={question} onAnswer={addAnswer} />))}
      </div>
    </div>
  );
};

Home.propTypes = {
  questions: PropTypes.array,
  fetchQuestions: PropTypes.func,
  addAnswer: PropTypes.func,
  user: PropTypes.object,
};
Home.defaultProps = {
  questions: [],
  fetchQuestions: e => e,
  addAnswer: e => e,
  user: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
