// npm packages
import React from 'react';
import{Link} from 'react-router';
import PropTypes from 'prop-types';

export default function Question({question, onAnswer}) {
  let answerInput;
  const handleClick = (e) => {
    e.preventDefault();
    onAnswer({question, answer: {answer: answerInput.value}});
    return false;
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
      {question.text}
        <div className="pull-right"><Link to={`profile/${question.owner.id}`} >{question.owner.login} </Link> </div>
        </div>
      <div className="panel-body">
        {question.answers.length > 0 ?
           (
             <ul className="list-group">
               {question.answers.map((a, i) => <li className="list-group-item" key={i}>{a.answer}</li>)}
             </ul>
            )
           : <span>No answers yet</span>}
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="answerInput"
              placeholder="Enter your answer..."
              ref={(i) => { answerInput = i; }}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={handleClick}>Answer</button>
        </form>
      </div>
    </div>
  );
}
Question.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func,
};
Question.defaultProps = {
  question: {},
  onAnswer: e => e,
};
