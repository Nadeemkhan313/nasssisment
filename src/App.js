import React, { useState } from "react";
import "./App.css";
import { projectsData } from "./projectsData";

import { Home } from "./Components/Home";

import Navbar from "./Components/Navbar";
import { AddProject } from "./Components/AddProject";
import { Projects } from "./Components/Projects";
import { Footers } from "./Components/Footers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <br />
      <AddProject />
      <Projects />
      <Footers />
    </div>
  );
};

export default App;
