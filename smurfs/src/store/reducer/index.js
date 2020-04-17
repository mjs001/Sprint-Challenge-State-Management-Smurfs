import { GET } from "../actions";
import { GET_SUCCESS } from "../actions";
import { POST } from "../actions";
import { DELETE } from "../actions";

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
        isFetching: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
      };
    case POST:
      return {
        ...state,
        smurfs: action.payload,
      };
    case DELETE: {
      const newState = Object.assign([], state);
      const indexOfSmurfToDelete = state.findIndex((smurfs) => {
        return smurfs.id == action.smurfs.id;
      });
      newState.splice(indexOfSmurfToDelete, 1);

      return newState;
    }

    default:
      return state;
  }
};
