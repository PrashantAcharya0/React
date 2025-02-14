import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? "5px solid Red" : "1px solid black",
        borderRadius: "3rem",
        width: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <h3>{props.name}</h3>
      <h4>{props.runs}</h4>
      {props.runs >= 100 && <h4>Star player</h4>}
    </div>
  );
};

export default Score;
