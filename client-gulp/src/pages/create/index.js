import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import moment from 'moment';
import {addQuestionAction} from '../../store/actions';
import Navbar from '../../components/navbar';

const mapStateToProps = state => ({
  user: state.auth.user,
  // world: state.helloWorld.world,
  // questions: state.questions.questions,
});

const mapDispatchToProps = dispatch => ({
  doAddQuestion: (payload) => { dispatch(addQuestionAction(payload)); },
//  fetchQuestions: _.once(() => dispatch(getAllQuestionsAction())),
//  addAnswer: (payload) => { dispatch(answerQuestionAction(payload)); },
});

export const Create = ({doAddQuestion, user}) => {
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
      <Navbar user={user} />
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
            <button type="submit" id="createBTN" className="btn btn-default" onClick={handleCreate} >Create new question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {
  doAddQuestion: PropTypes.func,
  user: PropTypes.object,
 // questions: React.PropTypes.array,
//  fetchQuestions: React.PropTypes.func,
//  addAnswer: React.PropTypes.func,
};
Create.defaultProps = {
  doAddQuestion: e => e,
  user: {},
//  questions: [],
 // fetchQuestions: e => e,
//  addAnswer: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
