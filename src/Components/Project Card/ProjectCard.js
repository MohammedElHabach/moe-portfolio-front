import React from 'react'
import "./ProjectCard.css"
import news from "../../assets/news.png"
import lms from "../../assets/lms-logo.png"
import book from "../../assets/book-logo.png"
import { Link } from 'react-router-dom'
const ProjectCard = ({ title, img, desc, demoLink, techStack }) => {
   console.log(img);
  
  return (
    <div className={`project-card`} >
    <img className='projectCard-img' src={`http://localhost:5000/${img}`} alt="img" />
    <div className="projectCard-body">
        <h1 className='projectCard-title'>{title}</h1>
        <p className='projectCard-subtitle'>Tech Stack : {techStack} </p>
        <p className='projectCard-info'>{desc}</p>
        <Link to={demoLink} target='_blank' className='projectCard-btn'>Visit Website     <i className="fa-solid fa-angle-right arrow-icon"></i></Link>
    </div>
    </div>
  )
}

export default ProjectCard