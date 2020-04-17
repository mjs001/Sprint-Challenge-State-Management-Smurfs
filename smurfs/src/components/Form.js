import React, { useState } from "react";
import { connect } from "react-redux";

const Form = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Smurf Name" name="name"></input>
        <input type="text" placeholder="Smurf Age" name="age"></input>
        <input type="text" placeholder="Smurf Height" name="height"></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default connect(null, {})(Form);

//still need to put handle change, submit handler, still need to put values, need to fill connect with function
