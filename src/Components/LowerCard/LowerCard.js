import React from "react";
import "./LowerCard.css";
const LowerCard = (props) => {
  const { tech } = props;
  const techItems = tech.map((item, index) => (
    <li key={index}>
      <a rel="noreferrer" href={item.link} target="_blank">
        {item.name}
      </a>
    </li>
  ));

  return (
    <>
      <div className= {`lower-section ${props.index === "1" ? 'lower-section2' : null}`}>
        <h3 className={props.classH3}>{props.h3}</h3>
        <ul className={props.classUl}>
          {techItems}
        </ul>
      </div>
    </>
  );
};

export default LowerCard;
