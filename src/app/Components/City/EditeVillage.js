import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { editeVillage } from "../../../api/Village/index";
const EditeVillage = ({ village, city, cities, setCities, handleClose }) => {
  const classes = useStyle();
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(error, openSnackBar);
  const initialValues = {
    arName: village.name.ar,
    enName: village.name.en
  };
  const schema = yup.object().shape({
    arName: yup.string().required("هذا الحقل مطلوب"),
    enName: yup.string().required("هذا الحقل مطلوب")
  });
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const data = {
        villageId: village._id,
        name: {
          ar: values.arName,
          en: values.enName
        }
      };
      editeVillage(data)
        .then(response => {
          console.log(response, "edite village response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data.city);
            let newCities = cities;
            let updatedCity = response.data.city;
            let oldCityIndex = newCities.findIndex(
              x => x._id === updatedCity._id
            );
            newCities[oldCityIndex] = updatedCity;
            setCities([...newCities]);
            formik.resetForm();
            setOpenSnackBar(true);
            setSubmitting(false);
            handleClose();
          } else if (response.responseStatus === API_COMMON_STATUS.CONFLICT) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          } else if (response.responseStatus === API_COMMON_STATUS.ERROR) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          } else if (
            response.responseStatus === API_COMMON_STATUS.BAD_REQUEST
          ) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          }
        })
        .catch(err => {
          disableLoading();
          setSubmitting(false);
          setError("خطأ غير معروف");
          setOpenSnackBar(true);
        });
    }
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return classes.invalid;
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  return (
    <form className={classes.editeForm} onSubmit={formik.handleSubmit}>
      <TextField
        className={classes.inputs}
        variant="outlined"
        label="اسم الحي عربي"
        name="arName"
        {...formik.getFieldProps("arName")}
        InputProps={{
          classes: {
            notchedOutline: getInputClasses("arName")
          }
        }}
      />
      {formik.touched.arName && formik.errors.arName ? (
        <Typography color="secondary" variant="body2">
          {formik.errors.arName}
        </Typography>
      ) : (
        <Typography color="secondary" variant="body2">
          &nbsp;&nbsp;
        </Typography>
      )}

      <TextField
        className={classes.inputs}
        variant="outlined"
        label="اسم الحي انجليزي"
        name="enName"
        {...formik.getFieldProps("enName")}
        InputProps={{
          classes: {
            notchedOutline: getInputClasses("enName")
          }
        }}
      />
      {formik.touched.enName && formik.errors.enName ? (
        <Typography color="secondary" variant="body2">
          {formik.errors.enName}
        </Typography>
      ) : (
        <Typography color="secondary" variant="body2">
          &nbsp;&nbsp;
        </Typography>
      )}
      <Grid
        container
        justify="space-between"
        className={classes.buttonsContainer}
      >
        <Button
          type="submit"
          className={classes.buttons}
          variant="contained"
          color="primary"
          disabled={formik.isSubmitting}
        >
          {loading && <span className="ml-3 spinner spinner-white"></span>}
          تعديل
        </Button>
        <Button
          className={classes.buttons}
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleClose}
        >
          الغاء
        </Button>
      </Grid>
    </form>
  );
};

export default EditeVillage;
