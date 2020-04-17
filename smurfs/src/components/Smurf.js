import React from "react";

function Smurf({ smurf }) {
  return (
    <div className="card">
      <h2>{smurf.name}</h2>
      <h2>age: {smurf.age}</h2>
      <h2>height: {smurf.height}</h2>
    </div>
  );
}

export default Smurf;
