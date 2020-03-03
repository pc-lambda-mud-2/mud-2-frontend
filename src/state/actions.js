import * as types from "./types";
import axios from "axios";

export const registrationError = error => {
    return { type: types.SIGNUP_ERROR, payload: error.message };
  };
  
  export const postRegister = (userDetails, props) => dispatch => {
    console.log("props from register", userDetails, props);
    axios
      .post("https://mud-backend-build.herokuapp.com/api/registration/", userDetails)
      .then(res => {
        console.log(res);
        dispatch({ type: types.POST_SIGNUP, payload: res.data });
        // props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
        dispatch(registrationError(error.message));
      });
  };

  export const LoginError = error => {
    return { type: types.LOGIN_ERROR, payload: error.message };
  };
  
  export const postLogin = (userDetails, props) => dispatch => {
    console.log("props from login", userDetails, props);
    axios
      .post("https://mud-backend-build.herokuapp.com/api/login/", userDetails)
      .then(res => {
        console.log(res.data.key);
        dispatch({ type: types.POST_LOGIN, payload: res.data });
        window.localStorage.setItem("token",res.data.key);
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
        dispatch(LoginError(error.message));
      });
  };