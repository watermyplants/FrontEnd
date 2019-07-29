import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

const initialState = {
  plantData: [],
  loggingIn: false,
  error: null
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
