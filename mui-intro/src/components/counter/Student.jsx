import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [Student, setStudent] = useState({
    name: "Shubham",
    age: 19,
    Gender: "Male",
  });
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Name: {Student.name}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Age: {Student.age}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Gender: {Student.Gender}
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
        color="yellow"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...Student, age: age });
        }}
      />

      <TextField
        label="Gender"
        type="Text"
        color="secondary"
        onChange={(e) => {
          const Gender = e.target.value;
          setStudent({ ...Student, Gender: Gender });
        }}
      />
    </Box>
  );
};

export default Student;
