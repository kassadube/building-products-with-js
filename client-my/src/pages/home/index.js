import React from 'react';
import {connect} from 'react-redux';

import {helloWorldAction, getAllQuestionsAction} from '../../store/actions';

const Home = ({onClick, fetchQuestions, world}) => {
  fetchQuestions();
  return (
    <div className="jumbotron">
      <h1>Hello, {world}</h1>
      <p>...</p>
      <button type="button" className="btn btn-default" onClick={() => onClick()}>Click me</button>
    </div>
  );
};

const mapStateToProps = state => ({
  world: state.helloWorld.world,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(getAllQuestionsAction()),
  onClick: () => dispatch(helloWorldAction()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
