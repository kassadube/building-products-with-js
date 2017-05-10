import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

import {registerAction} from '../../store/actions';


const mapStateToProps = state => ({
  redirectToLogin: state.auth.redirectToLogin,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  navToLogin: () => dispatch(push('/login')),
  onRegisterClick: params => dispatch(registerAction(params)),

});

const Register = ({onRegisterClick, navToLogin, redirectToLogin, error}) => {
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
  if (redirectToLogin) {
    setImmediate(() => navToLogin());
  }
  return (
    <div className="jumbotron">
      <h3>Login Page</h3>
      <p>please Register Or <Link to="/login" >Login </Link></p>
      {error ? (<div className="alert alert-danger" role="alert">gggg</div>)
      : ''}
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


export default connect(mapStateToProps, mapDispatchToProps)(Register);
