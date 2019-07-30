import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

import Axios from "axios";

export const registerUser = creds => dispatch => {
  console.log("registerUser creds", creds);
  dispatch({ type: REGISTER_START });
  //   return
  Axios.post("https://watermp.herokuapp.com/register", creds)
    .then(res => {
      console.log("RES inside actions register", res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => console.log(err.response.data));
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return Axios.post("https://watermp.herokuapp.com/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => console.log(err));
};
