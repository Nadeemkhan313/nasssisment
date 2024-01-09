import React, { useState } from "react";
import MainImg from "./Images/image.jpg";
import { AddProject } from "./AddProject";
import { Home } from "./Home";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="navContainer">
      <nav>
        <ul className="nav-list">
          <li className="left-element">Madenyn Torff</li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            About
          </li>
          <li
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div>
        <img className="HomepageImage" src={MainImg} alt="image not found" />
      </div>

      <Home />
      {/* <AddProject/> */}
      {/* {activeSection==="projects"&&<AddProject/>} */}
    </div>
  );
};

export default Navbar;
