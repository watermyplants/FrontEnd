import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS,
  FAILURE_PLANT_FAILURE,
  ADD_PLANT_START,
  ADD_PLANT_SUCCESS,
  ADD_PLANT_FAILURE,
  UPDATE_PLANT_START,
  UPDATE_PLANT_SUCCESS,
  UPDATE_PLANT_FAILURE,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAILURE
} from "../actions/types";

import Axios from "axios";
import { axiosWithAuth } from "../helpers/axiosConfig";

//Register Action

export const postRegister = creds => dispatch => {
  console.log("postRegister creds", creds);
  dispatch({ type: REGISTER_START });
  return (
    Axios.post("https://watermp.herokuapp.com/register", creds)
      .then(res => {
        console.log("RES postRegister", res);
        dispatch({ type: REGISTER_SUCCESS });
      })
      // .catch(err => console.log(err.response.data));
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }))
  );
};

//Login action

export const postLogin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    Axios.post("https://watermp.herokuapp.com/login", creds)
      .then(res => {
        console.log("RES postLogin", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: LOGIN_SUCCESS });
      })
      // .catch(err => console.log(err));
      .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }))
  );
};

//Plant actions

export const getPlants = userId => dispatch => {
  dispatch({ type: FETCH_PLANT_START });
  //   const id = localStorage.getItem("id");
  //   console.log("URL", `https://watermp.herokuapp.com/dashboard/${id}`);

  return Axios.get(`https://watermp.herokuapp.com/dashboard/${userId}`, {
    headers: { Authorization: localStorage.getItem("token") }
  })
    .then(res => {
      console.log("RES getPlants", res);
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const postPlants = addPlants => dispatch => {
  const userId = localStorage.getItem("id");
  const auth = localStorage.getItem("token");
  console.log("postPlants addPlants", addPlants);
  console.log("postPlants auth", auth);
  dispatch({ type: ADD_PLANT_START });
  //   console.log("UserId", userId);

  return axiosWithAuth()
    .post(
      `/dashboard/${userId}/plants/add`,
      addPlants

      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: auth
      //     }
      //   }
    )
    .then(res => {
      console.log("RES postPlants", res);
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data });
    })
    .catch(
      err => console.log(err.response)
      //   dispatch({ type: ADD_PLANT_FAILURE, payload: err.data.error })
    );
};

export const putPlants = plantId => dispatch => {
  dispatch({ type: UPDATE_PLANT_START });
  const userId = localStorage.getItem("id");

  return axiosWithAuth()
    .put(
      `/${userId}/my_plant/${plantId}/update`

      // {
      //   headers: { Authorization: localStorage.getItem("token") }
      // }
    )
    .then(res => {
      console.log("RES putPlants", res);
      dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const deletePlants = plantId => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  const userId = localStorage.getItem("id");

  return Axios.delete(
    // `https://watermp.herokuapp.com/dashboard/${userId}/my_plant/${plantId}/remove`,
    `https://watermp.herokuapp.com/dashboard/${userId}/my_plant/${plantId}/remove`,
    // removePlants,
    {
      headers: { Authorization: localStorage.getItem("token") }
    }
  )
    .then(res => {
      console.log("RES deletePlants", res);
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: plantId });
    })
    .catch(err => console.log(err));
};

//Water schedule actions

// export const postWeekday = () => dispatch => {
//   dispatch({ type: FETCH_PLANT_START });
//   return Axios.post(
//     "https://watermp.herokuapp.com/dashboard/:id/my_plant/:plant_id/add_schedule"
//   )
//     .then(
//       res => console("Res inside of getWeekday action", res)
//       //dispatch ({type: FETCH_PLANT_SUCCESS, payload: res.data})
//     )
//     .catch(err => console.log(err));
// };
