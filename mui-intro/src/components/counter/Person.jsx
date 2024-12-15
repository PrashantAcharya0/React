import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFullName } from "../../../utils/utlis";

const Person = () => {
  const [Firstname, setFirstName] = useState("Siddhant");
  const [Lastname, setLastName] = useState("Baburawo");

  let college = "kec";
  return (
    <Box>
      <Typography variant="h3">
        Name:{getFullName(Firstname, Lastname)}
      </Typography>
      <Typography variant="h3" color="secondary">
        {college}
      </Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setFirstName("Saugat");
          setLastName("Neupane");
        }}
      >
        change name
      </Button>
    </Box>
  );
};

export default Person;
