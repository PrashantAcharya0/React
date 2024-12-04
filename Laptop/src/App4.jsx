import React from "react";
// conditonal rendering
// ? odd even
// const App = () => {
//   let num = 30;
//   let remainder = num % 2;

//   //   if (remainder === 0) {
//   //     return <p>Even number</p>;
//   //   }
//   //   return <p>Odd number</p>;

//   // yedi 30 is even lekhna pare

//   if (remainder === 0) {
//     return <p>{num} Even number</p>;
//   }
//   return <p>{num} Odd number</p>;
// };

// const App = () => {
//   let num = 10;
//   let remainder = num % 2;
//   //   return <p>{remainder ? "odd" : "even"}</p>;
//   return <p>{remainder === 0 ? "even" : "odd"}</p>;
// };

// export default App;

const App = () => {
  let isloggedIn = true;
  //   let log = false;
  if (isloggedIn) {
    return <p> {`You are logged in`}</p>;
  }
  return <p> {`you are not Logged out`}</p>;
};

export default App;
