import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Get } from "../store/actions";
import Smurf from "./Smurf";

const SmurfsList = ({ state, Get }) => {
  useEffect(() => {
    Get();
  }, [Get]);

  if (state.isFetching) {
    return <div className="lds-ellipsis">loading...</div>;
  }

  return (
    <>
      <h2>SMURFS:</h2>
      <div>
        {state.smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf}></Smurf>;
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { Get })(SmurfsList);
