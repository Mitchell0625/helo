import axios from "axios";

const initialState = {
  username: "",
  id: "",
  profilepic: "",
  user: []
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const HOLD_USER = "HOLD_USER";

export function registerUser(username, password) {
  return {
    type: REGISTER_USER,
    payload: axios.post(`/api/auth/register`, { username, password })
  };
}

export function loginUser(username, password) {
  return {
    type: LOGIN_USER,
    payload: axios.post(`/api/auth/login`, { username, password })
  };
}

export function holdUser({ id, username, profilepic }) {
  return {
    type: HOLD_USER,
    payload: {
      id,
      username,
      profilepic
    }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${HOLD_USER}_FULFILLED`:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password
      };

    default:
      return state;
  }
}
