import React from "react";
import CustomButton from "./components/button/CustomButton";
import { Typography } from "@mui/material";
import CustomTypography from "./components/paragraph/CustomTypography";
import Counter from "./components/counter/Counter";
import Person from "./components/counter/Person";
import Car from "./components/counter/Car";
import Animal from "./components/counter/Animal";
import Student from "./components/counter/Student";
import Actors from "./components/counter/Actors";

const App = () => {
  return (
    <div>
      <Actors />
    </div>
  );
};

export default App;
