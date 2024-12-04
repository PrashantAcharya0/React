import React from "react";

const Bird = (props) => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        border: "2px solid black",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "50%",
        }}
        src={props.image}
        alt="Lenovo legion 5"
      />
      <h3 style={{ padding: "1rem" }}> The Crow</h3>
      <button style={{ margin: 15, padding: 10 }}>View more</button>
    </div>
  );
};

export default Bird;
