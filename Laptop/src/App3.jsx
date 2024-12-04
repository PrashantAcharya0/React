import React from "react";
import Mobile from "./Mobile";

const App = () => {
  return (
    <div>
      <Mobile name="Samsung S22" price="$200" />
      <div>
        <p>This is the best Phone</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default App;
