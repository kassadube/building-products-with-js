// npm packages
import React from 'react';

export default function Question({question}) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{question.text}</div>
      <div className="panel-body">
        Panel content
    </div>
    </div>
  );
}
Question.propTypes = {
  question: React.PropTypes.object,
};
Question.defaultProps = {
  question: {},
};
