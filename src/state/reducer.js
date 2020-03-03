import * as types from "./types";

const initialUser = {
    newUser: {},
    errorMsg: {}
  };
  
  export const RegisterReducer = (state = initialUser, action) => {
    switch (action.type) {
      case types.POST_SIGNUP:
        return { ...state, newUser: action.payload };
      case types.SIGNUP_ERROR:
        return { ...state, errorMsg: action.payload };
      default:
        return state;
    }
  };

  const loginUser = {
    newLogin: {},
    errorMsg: {}
  };
  
  export const LoginReducer = (state = loginUser, action) => {
    switch (action.type) {
      case types.POST_LOGIN:
        return { ...state, newLogin: action.payload };
      case types.LOGIN_ERROR:
        return { ...state, errorMsg: action.payload };
      default:
        return state;
    }
  };

  const initializeUser = {
    initialize: {},
    errorMsg: {}
  };
  
  export const InitializePlayerReducer = (state = initializeUser, action) => {
    switch (action.type) {
      case types.GET_INITIALIZE_PLAYER:
        return { ...state, initialize: action.payload };
      case types.INITIALIZE_PLAYER_ERROR:
        return { ...state, errorMsg: action.payload };
      default:
        return state;
    }
  };