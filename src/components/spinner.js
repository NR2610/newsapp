import React from "react";
import loading from "../loading-buffering.gif";

const Spinner = props => {
  return (
    <div className="text-center text-sm">
      <img className="my-4" src={loading} alt="loading" />
    </div>
  );
};
export default Spinner;
