// npm packages
import React from 'react';

export default function Question({question, onAnswer}) {
  let answerInput;
  const handleClick = (e) => {
    e.preventDefault();
    onAnswer({question, answer: {answer: answerInput.value}});
    return false;
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">{question.text}</div>
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
  question: React.PropTypes.object,
  onAnswer: React.PropTypes.func,
};
Question.defaultProps = {
  question: {},
  onAnswer: e => e,
};
