import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledOnboarding } from "../styles";
import * as actionCreators from "../state/actions";

const UserOnboarding = props => {
  const [userSignup, setUserSignup] = useState({ username: "", password1: "",password2: "" });
  const [userLogin, setUserLogin] = useState({ username: "", password: ""});
  
  const handleSignup = e => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };
  const submitSignup = e => {
    e.preventDefault();
    props.postRegister(userSignup, props);
  };

  const handleLogin = e => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const submitLogin = e => {
    e.preventDefault();
    props.postLogin(userLogin, props);
  };

  return (
    <StyledOnboarding>
      <h1>mud game</h1>
      <div className="form-cont">
        <div className="signup">
          {(props.signUpReducer.newUser && props.signUpReducer.newUser.key) && 
          <p style={{marginLeft: "30%"}}>Sign up successful, <br /> please log in</p>}
            <h1>signup</h1>
          <form>
            <input
              type="text"
              name="username"
              onChange={handleSignup}
              placeholder="username"
            />
            <input
              type="password"
              name="password1"
              onChange={handleSignup}
              placeholder="password"
            />
            <input
            style={{fontSize:" 1.4em"}}
              type="password"
              name="password2"
              onChange={handleSignup}
              placeholder="confirm password"
            />
            <button onClick={submitSignup}>sign up</button>
          </form>
        </div>
        <div className="login">
        <h1>login</h1>
          <form>
          <input
              type="text"
              name="username"
              onChange={handleLogin}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              onChange={handleLogin}
              placeholder="password"
            />
            <button onClick={submitLogin}>login</button>
          </form>
        </div>
      </div>
    </StyledOnboarding>
  );
};

export default connect(state => state, actionCreators)(UserOnboarding);
