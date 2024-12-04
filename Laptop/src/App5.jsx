import React from "react";
import Score from "./Score";

const playerData = [
  {
    id: 1,
    name: "kushal Bhurtel",
    runs: 30,
  },
  {
    id: 2,
    name: "Shikhar Dhawan",
    runs: 71,
  },
  {
    id: 3,
    name: "Rohit Paudel",
    runs: 100,
  },
];
const App = () => {
  return (
    <div>
      {playerData.map((item) => {
        return <Score key={item.id} name={item.name} runs={item.runs} />;
      })}
    </div>
  );
};

export default App;
