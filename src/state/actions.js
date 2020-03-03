import * as types from "./types";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const moveNorthError = error => {
  return { type: types.MOVE_NORTH_ERROR, payload: error.message };
};

export const moveNorth = directions => dispatch => {
  console.log("props from move", directions);
  axiosWithAuth()
    .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", directions)
    .then(res => {
      console.log(res);
      dispatch({ type: types.MOVE_NORTH, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch(registrationError(error.message));
    });
};

export const initializePlayerError = error => {
  return { type: types.INITIALIZE_PLAYER_ERROR, payload: error.message };
};

export const initializePlayer = () => dispatch => {
  console.log("props from register");
  axiosWithAuth()
    .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
    .then(res => {
      console.log(res);
      dispatch({ type: types.GET_INITIALIZE_PLAYER, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch(registrationError(error.message));
    });
};

export const registrationError = error => {
  return { type: types.SIGNUP_ERROR, payload: error.message };
};

export const postRegister = (userDetails, props) => dispatch => {
  console.log("props from register", userDetails, props);
  axios
    .post(
      "https://lambda-mud-test.herokuapp.com/api/registration/",
      userDetails
    )
    .then(res => {
      console.log(res);
      dispatch({ type: types.POST_SIGNUP, payload: res.data });
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
    .post("https://lambda-mud-test.herokuapp.com/api/login/", userDetails)
    .then(res => {
      console.log(res.data.key);
      dispatch({ type: types.POST_LOGIN, payload: res.data });
      window.localStorage.setItem("token", res.data.key);
      props.history.push("/dashboard");
    })
    .catch(error => {
      console.log(error);
      dispatch(LoginError(error.message));
    });
};
