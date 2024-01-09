import React, { useState } from "react";

export const Home = () => {
  return (
    <div className="div-container">
      <h4>UX/UI DESIGNER</h4>
      <h1>
        Hello, my name <br /> is Madelyn Torff
      </h1>
      <p>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <button className="projects-btn">Projects</button>
      <button className="linkdin-btn">Linkedin</button>

      {/* <img className="homepageimage" src={MainImg} alt="image not fount" /> */}

      {/* <div className="content"> */}
      {/* {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects projects={projectsData} />}
        {activeSection === "contact" && <Contact />} */}
      {/* </div> */}
    </div>
  );
};
