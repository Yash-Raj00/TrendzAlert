import "./App.css";

// import React, { Component } from "react";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  // state = {          // Class Based
  //   progress: 0,
  // };
  // setProgress = (progress) => {
    //   this.setState({
      //     progress: progress,
      //   });
    // };
    const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            // progress={this.state.progress}
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={9}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={"business"}
                  pageSize={9}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={"entertainment"}
                  pageSize={9}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={9}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={"health"}
                  pageSize={9}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={"science"}
                  pageSize={9}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={"sports"}
                  pageSize={9}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key={"technology"}
                  pageSize={9}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}
export default App;