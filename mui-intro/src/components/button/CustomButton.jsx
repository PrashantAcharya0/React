import { Button, IconButton } from "@mui/material";
import React from "react";
import "./button.styles.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

// button ma by default variant text hunxa kei lekhena bhane chai
const CustomButton = () => {
  return (
    <div>
      <section
        id="variant-section"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1>Button Variants</h1>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outline"> outline </Button>
      </section>

      <section
        id="color-section"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1>Button Color</h1>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          secondary
        </Button>
        <Button color="error" variant="contained">
          error
        </Button>
        <Button color="warning" variant="contained">
          warning
        </Button>
        <Button color="info" variant="contained">
          info
        </Button>
        <Button color="success" variant="contained">
          success
        </Button>

        <Button
          sx={{ backgroud: "black", color: "white" }}
          variant="contained"
          size="large"
        >
          random color
        </Button>
      </section>

      <section
        className="button-section"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1>Button size</h1>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </section>

      <section
        className="button-section"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1>icon button / button with icon</h1>
        {/* <Button sx={{ textTransform: "lowercase" }}>edit</Button> */}
        <Button
          variant="outlined"
          color="success"
          startIcon={<EditOutlinedIcon />}
        >
          edit product
        </Button>
        <Button
          variant="outlined"
          color="error"
          endIcon={<DeleteOutlineOutlinedIcon />}
        >
          delete product
        </Button>
      </section>

      <section className="Icon-button">
        <h1>Icon button</h1>
        <IconButton color="error">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
