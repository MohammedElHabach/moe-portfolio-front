import React, { useEffect, useState } from "react";
import "./ProjectSection.css";
import ProjectCard from "../Project Card/ProjectCard";
import axios from "axios";
import Loader from "../Loader/Loader";
const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);



  const projectsURL = process.env.REACT_APP_URL + "/projects";

  const fetchProjects = async () => {
    try {
      const res = await axios.get(projectsURL);
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <section  id="projects-sec" className="project-section-container">
        <h1 className="recent-work-title">My Recent Work </h1>
        <p className="recent-work-paragraph">
          Here are a selection of projects I've been involved in or contributed
          to.
        </p>
      </section>

     {loading ? <Loader/>:  <section className="projects-container">
        {projects.map((item) => {
          return (
            <ProjectCard
              key={item._id}
              title={item.name}
              img={item.img}
              desc={item.desc}
              demoLink={item.demoLink}
              techStack={item.techStack}
            />
          );
        })}
      </section>}
    </>
  );
};

export default ProjectSection;
