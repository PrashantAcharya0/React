import React from "react";

const Car = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: 300,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        borderRadius: "3rem",
        color: "blue",
        // border: "1px solid black",
        boxShadow:
          props.edition === "Special Edition"
            ? "0 0 15px 5px rgba(255, 165, 0, 0.75)"
            : "0 6px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: 300, height: "auto", borderRadius: "3rem" }}
      />
      <h4>{props.brand}</h4>
      <h4>{props.Model}</h4>
      <h4>{props.price}</h4>
      <h4>{props.edition}</h4>
      {props.edition === "Special Edition"}
    </div>
  );
};

export default Car;
