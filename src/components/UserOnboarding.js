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
    console.log("===>signup", userSignup, props);
    props.postRegister(userSignup, props);
  };

  const handleLogin = e => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const submitLogin = e => {
    e.preventDefault();
    console.log("===>Login", userLogin, props);
    props.postLogin(userLogin, props);
  };

  return (
    <StyledOnboarding>
      <h1>mud game</h1>
      <div className="form-cont">
        <div className="signup">
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
              placeholder="password1"
            />
            <input
              type="password"
              name="password2"
              onChange={handleSignup}
              placeholder="password2"
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
