import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {registerAction} from '../../store/actions';

const Register = ({onRegisterClick}) => {
  let usernameInput;
  let passwordInput;
  let passwordRepeatInput;

  const handleClick = (e) => {
    e.preventDefault();
    onRegisterClick({
      login: usernameInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordRepeatInput.value,
    });
  };
  return (
    <div className="jumbotron">
      <h3>Login Page</h3>
      <p>please Register Or <Link to="/login" >Login </Link></p>
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            placeholder="username"
            ref={(i) => { usernameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordRepeatInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordRepeatInput"
            placeholder="Password repeat"
            ref={(i) => { passwordRepeatInput = i; }}
          />
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
};


const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onRegisterClick: params => dispatch(registerAction(params)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
