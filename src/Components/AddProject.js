import React from "react";
import FooterImg from "./Images/Vector.jpg";

export const AddProject = () => {
  return (
    <div>
      <div className="projectContainer">
        <h1>Add Project</h1>
        <label>Project Name</label>
        <input />
        <label>Project link</label>
        <input />
        <label>Description</label>
        <textarea />
        <button className="addbutton">Add</button>
      </div>
      <div>
        <footer>
          <img className="imagefooter" src={FooterImg} alt="image not found" />
        </footer>
      </div>
    </div>
  );
};
