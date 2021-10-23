import React, { useState } from "react";

const BenifitCard = (props) => {
  const [isDescVisible, setisDescVisible] = useState(false);

  const handleDesc = () => {
    setisDescVisible(!isDescVisible);
    console.log("working");
  };

  return (
    <div
      className={props.className}
      onMouseEnter={handleDesc}
      //   onBlur={handleDesc}
      onMouseLeave={handleDesc}
    >
      <span>{props.title}</span>

      {isDescVisible && props.description}
    </div>
  );
};
export default BenifitCard;
