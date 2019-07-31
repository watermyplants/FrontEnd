import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS
} from "../actions/types";

import Axios from "axios";

export const postRegister = creds => dispatch => {
  console.log("registerUser creds", creds);
  dispatch({ type: REGISTER_START });
  return (
    Axios.post("https://watermp.herokuapp.com/register", creds)
      .then(res => {
        console.log("RES inside actions register", res);
        dispatch({ type: REGISTER_SUCCESS });
      })
      // .catch(err => console.log(err.response.data));
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }))
  );
};

export const postLogin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    Axios.post("https://watermp.herokuapp.com/login", creds)
      .then(res => {
        console.log("RES inside of actions login", res);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: LOGIN_SUCCESS });
      })
      // .catch(err => console.log(err));
      .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }))
  );
};

export const getPlants = () => dispatch => {
  dispatch({ type: FETCH_PLANT_START });
  return Axios.get("https://watermp.herokuapp.com/dashboard/:id")
    .then(
      res => console.log("res in getPlants action", res)
      // dispatch({type: FETCH_PLANT_SUCCESS, payload: res.data})
    )
    .catch(err => console.log(err));
};

export const getWeekday = () => dispatch => {
  dispatch({ type: FETCH_PLANT_START });
  return Axios.post(
    "https://watermp.herokuapp.com/dashboard/:id/my_plant/:plant_id/add_schedule"
  ).then(res =>
    console("Res inside of getWeekday action", res)
      //dispatch ({type: FETCH_PLANT_SUCCESS, payload: res.data})
      .catch(err => console.log(err))
  );
};
