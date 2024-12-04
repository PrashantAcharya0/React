import React from "react";

const Mobile = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Mobile;
