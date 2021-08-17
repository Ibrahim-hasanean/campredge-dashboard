import { TextField } from "@material-ui/core";
import React from "react";
import useStyle from "./style";

const AddCity = ({ cities, setCities }) => {
  const classes = useStyle();
  //   const getInputClasses = fieldname => {
  //     if (formik.touched[fieldname] && formik.errors[fieldname]) {
  //       return classes.invalid;
  //     }

  //     if (formik.touched[fieldname] && !formik.errors[fieldname]) {
  //       return "is-valid";
  //     }

  //     return "";
  //   };
  return (
    <form className={classes.form}>
      <TextField
        // InputProps={{
        //   classes: {
        //     notchedOutline: getInputClasses("fullName")
        //   }
        // }}
        label="اسم المدينة"
        variant="outlined"
        className={classes.inputs}
      />
    </form>
  );
};

export default AddCity;
