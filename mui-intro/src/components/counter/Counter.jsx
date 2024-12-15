import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks => react function which has specific task
// example => useState, useEffect, useRef, useCallback, useMemo
// this-party hooks => redux => useselector, useDispatch
// router => useNavigate
const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        This is a counter app.
      </Typography>
      <Typography variant="h3">Count:{count}</Typography>

      <Button
        variant="outlined"
        color="success"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        increase count
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          let newCount = count - 1;
          setCount(newCount);
        }}
      >
        decrease count
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setCount(0);
        }}
      >
        reset count
      </Button>
    </Box>
  );
};

export default Counter;
