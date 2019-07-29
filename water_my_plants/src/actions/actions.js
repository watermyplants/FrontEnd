import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

import Axios from "axios";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return Axios.post("need to get url from backend", creds)
    .then(res => {
      console.log("RES inside actions register", res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return Axios.post("need to get url from backend", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => console.log(err));
};
