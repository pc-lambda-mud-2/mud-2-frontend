import * as types from "./types";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const baseURL = 'https://mud-2-backend-development-3.herokuapp.com'

export const getRoomsError = error => {
  return { type: types.GET_ROOMS_ERROR, payload: error.message };
};

export const getRooms = () => dispatch => {
  axiosWithAuth()
    .get(`${baseURL}/api/adv/rooms/`)
    .then(res => {
      dispatch({ type: types.GET_ROOMS, payload: res.data });
    })
    .catch(error => {
      dispatch(registrationError(error.message));
    });
};

export const moveNorthError = error => {
  return { type: types.MOVE_NORTH_ERROR, payload: error.message };
};

export const moveNorth = directions => dispatch => {
  axiosWithAuth()
    .post(
      `${baseURL}/api/adv/move/`,
      directions
    )
    .then(res => {
      dispatch({ type: types.MOVE_NORTH, payload: res.data });
    })
    .catch(error => {
      dispatch(registrationError(error.message));
    });
};

export const initializePlayerError = error => {
  return { type: types.INITIALIZE_PLAYER_ERROR, payload: error.message };
};

export const initializePlayer = () => dispatch => {
  axiosWithAuth()
    .get(`${baseURL}/api/adv/init/`)
    .then(res => {
      dispatch({ type: types.GET_INITIALIZE_PLAYER, payload: res.data });
    })
    .catch(error => {
      dispatch(registrationError(error.message));
    });
};

export const registrationError = error => {
  return { type: types.SIGNUP_ERROR, payload: error.message };
};

export const postRegister = (userDetails, props) => dispatch => {
  axios
    .post(
      `${baseURL}/api/registration/`,
      userDetails
    )
    .then(res => {
      dispatch({ type: types.POST_SIGNUP, payload: res.data });
      dispatch(postLogin(userDetails, props))
    })
    .catch(error => {
      dispatch(registrationError(error.message));
    });
};

export const LoginError = error => {
  return { type: types.LOGIN_ERROR, payload: error.message };
};

export const postLogin = (userDetails, props) => dispatch => {
  axios
    .post(
      `${baseURL}/api/login/`,
      userDetails
    )
    .then(res => {
      dispatch({ type: types.POST_LOGIN, payload: res.data });
      window.localStorage.setItem("token", res.data.key);
      props.history.push("/dashboard");
    })
    .catch(error => {
      dispatch(LoginError(error.message));
    });
};
