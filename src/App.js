import React, { useState } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = props => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_APPIKEY;
  const [progress, setProgress] = useState(0);
  // const [pageSize, setPageSize] = (useStatsetProgress = { setProgress }(15));
  // const[(apiKey, setApiKey)] = useState(process.env.REACT_APP_APPIKEY);
  // state = {
  //   progress: 0
  // };
  const [state, setState] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            key="general"
            element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Bussiness"
            key="business"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Entertainment"
            key="entertainment"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/General"
            key="general"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Health"
            key="health"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Science"
            key="science"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Sports"
            key="sports"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Technology"
            key="technology"
            element={
              <News
                // setsProgess={item => setProgress(progress + item)}setProgress={setProgress}
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
