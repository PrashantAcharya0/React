import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getBrandName } from "../../../utils/utlis";
import { getModelName } from "../../../utils/utlis";
import NextPlanOutlinedIcon from "@mui/icons-material/NextPlanOutlined";

const Person = () => {
  const [BrandName, setBrandName] = useState("Toyota");
  const [ModelName, setModelName] = useState("GR86");

  return (
    <Box>
      <Typography variant="h4" color="primary">
        Brand: {getBrandName(BrandName)}
      </Typography>
      <Typography variant="h4" color="yellow">
        Model: {getModelName(ModelName)}
      </Typography>

      <Button
        variant="outlined"
        color="success"
        endIcon={<NextPlanOutlinedIcon />}
        onClick={() => {
          setBrandName("Porsche");
          setModelName("911 Carrera");
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Person;
