import React, { Component } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} />
      </div>
    );
  }
}
