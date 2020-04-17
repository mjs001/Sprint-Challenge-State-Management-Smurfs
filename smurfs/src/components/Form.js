import React, { useState } from "react";
import { connect } from "react-redux";
import { Post } from "../store/actions";
const Form = ({ Post }) => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = (e) => {
    if (e.target.name === "age") {
      console.log(parseInt(e.target.value));
      setSmurf({ ...smurf, [e.target.name]: parseInt(e.target.value) });
    } else {
      setSmurf({ ...smurf, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Post(smurf);
    setSmurf({ name: "", age: "", height: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Smurf Name"
          name="name"
          value={smurf.name}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          placeholder="Smurf Age"
          name="age"
          value={smurf.age}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          placeholder="Smurf Height"
          name="height"
          value={smurf.height}
          onChange={handleChanges}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default connect(null, { Post })(Form);

//still need to put handle change, submit handler, still need to put values, need to fill connect with function
