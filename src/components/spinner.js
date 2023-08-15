import React, { Component } from "react";
import loading from "../SVKl.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center text-sm">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
