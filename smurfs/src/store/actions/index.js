import axios from "axios";

export const GET = "GET";
export const GET_SUCCESS = "GET_SUCCESS";
export const POST = "POST";
export const DELETE = "DELETE";
export const Get = () => (dispatch) => {
  dispatch({ type: GET });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const Post = (smurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Delete = (smurf) => (dispatch) => {
  axios
    .delete(`http://localhost:3333/smurfs${smurf.id}`, smurf)
    .then((res) => {
      console.log("im the delete", res.data);
      dispatch({ type: DELETE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
