import React, { Component } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" key="general" element={<News pageSize={6} country="in" category="general" />} />
          </Routes>
          <Routes>
            <Route exact path="/Bussiness" key="business" element={<News pageSize={6} country="in" category="business" />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/Entertainment"
              key="entertainment"
              element={<News pageSize={6} country="in" category="entertainment" />}
            />
          </Routes>
          <Routes>
            <Route exact path="/General" key="general" element={<News pageSize={6} country="in" category="general" />} />
          </Routes>
          <Routes>
            <Route exact path="/Health" key="health" element={<News pageSize={6} country="in" category="health" />} />
          </Routes>
          <Routes>
            <Route exact path="/Science" key="science" element={<News pageSize={6} country="in" category="science" />} />
          </Routes>
          <Routes>
            <Route exact path="/Sports" key="sports" element={<News pageSize={6} country="in" category="sports" />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/Technology"
              key="technology"
              element={<News pageSize={6} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
