import React from "react";
import ProjectImage from "./Images/pexels-elly-fairytale-3823207 1.jpg";
import PenImg from "./Images/Rectangle 7.jpg";
import MobileImage from "./Images/Rectangle1.jpg";

import Icons from "./Images/icons.jpg";

export const Projects = () => {
  return (
    <div className="ProjectsContainers">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-details">
        <div className="p1">
          <h1 className="PrName">Project Name</h1>
          <p>
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example
          </p>
          <button className="linkdin-btn">View Project</button>
        </div>
        <div>
          <img className="projectsImage" src={ProjectImage} />
        </div>
      </div>
      <div className="projects-detailspen">
        <div>
          <img className="projectsImagepen" src={PenImg} />
        </div>
        <div>
          <h1 className="p2">Project Name</h1>
          <p>
            What was your role, your deliverables, ifthe project was
            personal,freelancing
          </p>
          <button className="linkdin-btn">View Project</button>
        </div>
      </div>
      <div className="prjt3">
        <div className="p3">
          <h1>Project Name</h1>
          <p>
            You can also add in this description the type of the project. if it
            was for web, mobile,electron
          </p>
          <button className="linkdin-btn">View Project</button>
        </div>
        <div>
          <img
            className="projectsImage"
            alt="images not found"
            src={MobileImage}
          />
        </div>
      </div>
      <div className="icons">
        <img className="ic" alt="img not found" src={Icons} />
        <p>Copyright © 2024. All rights reserved</p>
      </div>
    </div>
  );
};
