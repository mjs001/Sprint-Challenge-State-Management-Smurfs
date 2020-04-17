import { GET } from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
          ...state,
          isFetching: true;
      }
    case GET_SUCCESS:
      return{
          ...state,
          isFetching: false,
          smurfs: action.payload
      }
    case POST:
      return {
          ...state,
          smurfs: action.payload
      }
      default:
          return state;
  }
};
