import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  let [text, setText] = useState("random text");
  return (
    <Box>
      <Typography variant="h3">Some text here</Typography>
      <TextField
        label="Type something..."
        color="success"
        onChange={(e) => {
          console.log(e);
          setText(e.target.value);
        }}
      />
      <Box>
        <Typography variant="h3">Another text here</Typography>
        <TextField
          label="Type somthing..."
          color="primary"
          onChange={(a) => {
            console.log(a);
            setText(a.target.value);
          }}
        />
      </Box>
    </Box>
  );
};

export default Animal;
