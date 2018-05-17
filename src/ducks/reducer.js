import axios from "axios";

const initialState = {
  username: "",
  id: "",
  profilepic: "",
  user: []
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";

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
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };
    case `${LOGIN_USER}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
