import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import {helloWorldAction, getAllQuestionsAction} from '../../store/actions';
import Question from '../../components/question';

const mapStateToProps = state => ({
  world: state.helloWorld.world,
  questions: state.questions.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => _.once(() => dispatch(getAllQuestionsAction())),
  onClick: () => dispatch(helloWorldAction()),

});

const Home = ({onClick, fetchQuestions, world, questions}) => {
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
      <Question />
      {JSON.stringify(questions)}
    </div>
  );
};

Home.propTypes = {
  questions: React.PropTypes.array,
  world: React.PropTypes.string,
  onClick: React.PropTypes.func,
  fetchQuestions: React.PropTypes.func,
};
Home.defaultProps = {
  questions: [],
  world: '',
  onClick: e => e,
  fetchQuestions: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
