import React from "react";

const UpperCard = (props) => {
  return (
    <>
      <div className="upper-section">
        <img src={props.img} className={props.classImg} alt={props.altImg} />
        <h3 className={props.classH3}>{props.h3}</h3>
        <p className={props.classP}>{props.p}</p>
      </div>
    </>
  );
};

export default UpperCard;
