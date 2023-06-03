import React from "react";
import svg from "../../assets/mf-avatar.svg";
import "./Hero.css";
import Card from "../Card/Card";
import coding from "../../assets/coding.png";
import backend from "../../assets/cloud-computing.png";
import trace from "../../assets/trace.png";
import UpperCard from "../UpperCard/UpperCard";
import LowerCard from "../LowerCard/LowerCard";
import cv from "../../assets/Mohammed El Habach - CV.pdf";
const Hero = () => {
  const techFront = [
    { name: "React", link: "https://reactjs.org" },
    { name: "Redux", link: "https://redux.js.org/" },
    { name: "MaterialUI", link: "https://mui.com" },
  ];

  const techBack = [
    { name: "NodeJS", link: "https://nodejs.org/en" },
    { name: "ExpressJS", link: "https://expressjs.com/" },
    { name: "MongoDB", link: "https://www.mongodb.com/" },
    { name: "RESTful API", link: "https://restfulapi.net/" },
  ];

  const techWordPress = [
    { name: "Informative" },
    { name: "E-commerce"},
    { name: "Landing Page"},
  ];
  return (
    <>
      <section className="Hero_container">
        <h1 className="Hero_h1">Full Stack Web Developer</h1>
        <h2 className="Hero_h2">
          Transforming Ideas into Functional Solutions
        </h2>
        <img className="Hero_avatar" src={svg} alt="avatar" />
        <button className="Download-cv">
          <i className="fa-solid fa-download"></i>{" "}
          <a href={cv} download={"Mohammed El Habach - CV"}>
            Resume
          </a>
        </button>
      </section>

      <section className="Hero_info">
        <h2 className="Hero_info_title">
          Hey, I'm Mohammed. Great to meet you.
        </h2>
        <p className="Hero_info_text">
          I am a passionate and driven full stack web developer with a keen eye
          for detail and a love for creating seamless digital
          experiences.Constantly seeking new challenges, I embrace the
          ever-evolving world of web development, staying up to date with the
          latest trends and best practices.
          <br />
          Join me on this exciting journey as we transform concepts into
          captivating online realities.
        </p>

        <div className="card-container">
          <Card>
            <UpperCard
              img={coding}
              h3={"Frontend Development"}
              p={
                "Building intuitive and interactive interfaces that captivate users and drive engagement."
              }
              classImg={"card-png"}
              altImg={"frontend pic"}
              classH3={"frontend-h3"}
              classP={"frontend-text"}
            />

            <LowerCard
              h3={"Frameworks & Libraries"}
              classH3={"lowerCard-h3"}
              classUl={"lowerCard-ul-front"}
              tech={techFront}
            />
          </Card>

          <Card>
            <UpperCard
              img={backend}
              h3={"Backend Development"}
              p={
                "Building scalable and secure backend systems to fuel your online success."
              }
              classImg={"card-png"}
              altImg={"backend pic"}
              classH3={"backend-h3"}
              classP={"backend-text"}
            />
            <LowerCard
              h3={"Technologies"}
              classH3={"lowerCard-h3"}
              classUl={"lowerCard-ul-front"}
              tech={techBack}
            />
          </Card>

          <Card>
            <UpperCard
              img={trace}
              h3={"WordPress"}
              p={
                "Unlock the power of WordPress with customized solutions and stunning designs."
              }
              classImg={"card-png"}
              altImg={"wordpress pic"}
              classH3={"wordpress-h3"}
              classP={"wordpress-text"}
            />

            <LowerCard
              h3={"Types"}
              classH3={"lowerCard-h3"}
              classUl={"lowerCard-ul-front"}
              tech={techWordPress}
            />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Hero;
