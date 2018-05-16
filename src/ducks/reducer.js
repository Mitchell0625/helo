import axios from "axios";

const initialState = {
  userName: "",
  passWord: "",
  user: []
};

const REGISTER_USER = "REGISTER_USER";

export function registerUser({ userName, passWord }) {
  return {
    type: REGISTER_USER,
    payload: axios.post(`/api/newPost`, { userName, passWord })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
