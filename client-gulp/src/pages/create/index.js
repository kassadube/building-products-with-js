import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import moment from 'moment';
import {addQuestionAction} from '../../store/actions';

const mapStateToProps = state => ({
  // world: state.helloWorld.world,
  // questions: state.questions.questions,
});

const mapDispatchToProps = dispatch => ({
  doAddQuestion: (payload) => { dispatch(addQuestionAction(payload)); },
//  fetchQuestions: _.once(() => dispatch(getAllQuestionsAction())),
//  addAnswer: (payload) => { dispatch(answerQuestionAction(payload)); },
});

const Create = ({doAddQuestion}) => {
  let questionTextInput;
  let expirationDateInput;

  const handleCreate = (e) => {
    e.preventDefault();
    const date = moment(expirationDateInput.value).toISOString();
    const qText = questionTextInput.value;
    const data = {text: qText, expirationDate: date};
    doAddQuestion(data);
  };

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Brand</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/other">page Not Found</Link></li>
            <li ><Link to="/">Browse questions</Link></li>
            <li className="active"><Link to="/create">Create new questions</Link></li>
          </ul>
        </div>
      </nav>
      <div >
        <form className="form">
          <div className="form-group">
            <label htmlFor="questionText">Question Text</label>
            <input
              type="text"
              className="form-control"
              id="questionText"
              placeholder="place your text..."
              ref={(i) => { questionTextInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="date"
              className="form-control"
              id="expirationDate"
              ref={(i) => { expirationDateInput = i; }}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default" onClick={handleCreate} >Create new question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {
  doAddQuestion: PropTypes.func,
 // questions: React.PropTypes.array,
//  fetchQuestions: React.PropTypes.func,
//  addAnswer: React.PropTypes.func,
};
Create.defaultProps = {
  doAddQuestion: e => e,
//  questions: [],
 // fetchQuestions: e => e,
//  addAnswer: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
