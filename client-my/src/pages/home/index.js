import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import {getAllQuestionsAction, answerQuestionAction} from '../../store/actions';
import Question from '../../components/question';

const mapStateToProps = state => ({
  // world: state.helloWorld.world,
  questions: state.questions.questions,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestionsAction())),
  addAnswer: (payload) => { dispatch(answerQuestionAction(payload)); },
});

const Home = ({fetchQuestions, questions, addAnswer}) => {
  fetchQuestions();
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Brand</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/other">page Not Found</Link></li>
            <li><Link to="/">Browse questions</Link></li>
            <li><Link to="/create">Create new questions</Link></li>
          </ul>
        </div>
      </nav>
      <div>
        {questions.map(question => (<Question key={question.id} question={question} onAnswer={addAnswer} />))}
      </div>
    </div>
  );
};

Home.propTypes = {
  questions: React.PropTypes.array,
  fetchQuestions: React.PropTypes.func,
  addAnswer: React.PropTypes.func,
};
Home.defaultProps = {
  questions: [],
  fetchQuestions: e => e,
  addAnswer: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
