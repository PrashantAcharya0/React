import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [Student, setStudent] = useState({
    name: "Shubham",
    age: 19,
  });
  return (
    <Box>
      <Typography variant="h3">Name: {Student.name}</Typography>
      <Typography variant="h3" gutterBottom>
        Age: {Student.age}
      </Typography>

      <TextField
        label="Name"
        color="primary"
        onChange={(e) => {
          const name = e.target.value;
          setStudent({ ...Student, name: name });
        }}
      />

      <TextField
        label="Age"
        type="number"
        color="secondary"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...Student, age: age });
        }}
      />
    </Box>
  );
};

export default Student;
