import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import {getAllQuestionsAction} from '../../store/actions';
import Question from '../../components/question';

const mapStateToProps = state => ({
  // world: state.helloWorld.world,
  questions: state.questions.questions,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestionsAction())),
});

const Home = ({fetchQuestions, questions}) => {
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
      <button type="button" className="btn btn-default" onClick={() => fetchQuestions()}>Click me</button>
    </div>
  );
};

Home.propTypes = {
  questions: React.PropTypes.array,
  fetchQuestions: React.PropTypes.func,
};
Home.defaultProps = {
  questions: [],
  fetchQuestions: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
