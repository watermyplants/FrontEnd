import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS,
  FETCH_PLANT_FAILURE
} from "../actions/types";

const initialState = {
  plantData: [],
  weekday: [],
  loggingIn: false,
  isFetching: false,
  error: null,
  token: localStorage.getItem("token")
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: payload
      };
    case REGISTER_START:
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: payload
      };
    case FETCH_PLANT_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_PLANT_SUCCESS:
      return {
        ...state,
        plantData: payload,
        weekday: payload,
        isFetching: false,
        error: ""
      };
    case FETCH_PLANT_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
