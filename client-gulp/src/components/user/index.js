// npm packages
import React from 'react';
import PropTypes from 'prop-types';

export default function User({user}) {
   return user?
   (
    <div className="panel panel-default" key={user.id}>
      <div className="panel-heading">{user.login}</div>
      <div className="panel-body">
          Registration Date {user.registrationDate}
      </div>
    </div>
  ) : null;
}
User.propTypes = {
  user: PropTypes.object,
};
User.defaultProps = {
  user: {},
};
