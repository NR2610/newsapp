import React, { Component } from "react";
import loading from "../loading-buffering.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center text-sm">
        <img className="my-4" src={loading} alt="loading" />
      </div>
    );
  }
}
