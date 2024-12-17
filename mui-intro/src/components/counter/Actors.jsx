import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Actors = () => {
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Nikil Uprety",
    },
    {
      id: 3,
      name: "Biraj Bhatta",
    },
    {
      id: 4,
      name: "Dayahang Rai",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Hero list{""}
      </Typography>
      {heroes.map((item) => {
        return (
          <Stack key={item.id}>
            <Typography variant="h5" key={item.id} gutterBottom>
              {item.name}
            </Typography>

            <Button
              variant="contained"
              color="error"
              endIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => {
                const itemId = item.id;
                const newArray = heroes.filter((item) => {
                  return item.id !== itemId;
                });

                setHeroes(newArray);
              }}
            >
              Delete
            </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Actors;
