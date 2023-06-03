import React from "react";
import "./LowerCard.css";
const LowerCard = (props) => {
  const { tech } = props;

  return (
    <>
      <div className="lower-section">
        <h3 className={props.classH3}>{props.h3}</h3>
        <ul className={props.classUl}>
          {tech.map((item, index) => {
            return (
              <li key={index}>
                <a rel="noreferrer" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LowerCard;
