import { Box, Typography } from "@mui/material";
import React from "react";

const CustomTypography = () => {
  return (
    <Box>
      <Typography variant="h1" color="error">
        header 1
      </Typography>
      <Typography variant="h2">header 2</Typography>
      <Typography variant="h3">header 3</Typography>
      <Typography variant="h4">header 4</Typography>
      <Typography variant="h5">header 5</Typography>
      <Typography variant="h6">header 6</Typography>
    </Box>
  );
};

export default CustomTypography;
