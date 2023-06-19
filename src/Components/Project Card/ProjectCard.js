import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
const ProjectCard = ({ title, img, desc, demoLink, techStack }) => {
  return (
    <div className={`project-card`}>
      <img
        className="projectCard-img"
        src={`${process.env.REACT_APP_IMAGE}${img.replace("backend/", "")}`}
        alt="img"
      />
      <div className="projectCard-body">
        <h1 className="projectCard-title">{title}</h1>
        <p className="projectCard-subtitle">Tech Stack : {techStack} </p>
        <p className="projectCard-info">{desc}</p>
        <Link to={demoLink} target="_blank" className="projectCard-btn">
          Visit Website <i className="fa-solid fa-angle-right arrow-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
