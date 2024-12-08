import React from "react";

const divstyle = {
  width: "400px",
  padding: "2 rem",
  border: "1px solid black",
};

const imgStyle = { height: 400, width: "100%" };
const Person = (props) => {
  return (
    <div style={divstyle}>
      <img src={props.image} alt="" style={imgStyle} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Person;
