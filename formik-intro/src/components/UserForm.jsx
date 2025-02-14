import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserForm = () => {
  return (
    <Box>
      <Typography variant="h3">User data collection</Typography>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string("name is required")
            .required()
            .trim()
            .max(55, "name must be at max 55 character"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                border: "1px solid black",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              {/* form control is a div*/}
              <FormControl>
                <TextField
                  label="user name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <Button variant="contained" color="success" type="submit">
                Summit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserForm;
