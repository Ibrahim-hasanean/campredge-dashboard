import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core";
import useStyle from "./style";
import * as yup from "yup";
import { useFormik } from "formik";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { Alert } from "@material-ui/lab";
import { addCity } from "../../../api/Cities/index";
import ClearIcon from "@material-ui/icons/Clear";
const CitiesHeader = ({ cities, setCities, getData }) => {
  const classes = useStyle();
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeAlert = () => {
    setOpenSnackBar(false);
  };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  // const getInputClasses = fieldname => {
  //   if (formik.touched[fieldname] && formik.errors[fieldname]) {
  //     return classes.invalid;
  //   }

  //   if (formik.touched[fieldname] && !formik.errors[fieldname]) {
  //     return "is-valid";
  //   }

  //   return "";
  // };
  const initialValues = {
    arName: "",
    enName: ""
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
        name: {
          ar: values.arName,
          en: values.enName
        }
      };
      addCity(data)
        .then(async response => {
          console.log(response, "add city response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            // console.log(response.response.user);
            // let newCities = [...cities];
            // newCities.unshift(response.data.city);
            // setCities([...newCities]);
            await getData();
            formik.resetForm();
            setOpenSnackBar(true);
            setSubmitting(false);
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

  return (
    <Grid container>
      <Grid className={classes.header} item xs={12}>
        <Typography variant="h4">المدن</Typography>
      </Grid>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Grid container justify="flex-start" alignItems="center" item xs={12}>
          <Grid container xs={3} direction="column" item>
            <TextField
              className={classes.inputs}
              variant="standard"
              label="اسم المدينة عربي"
              name="arName"
              {...formik.getFieldProps("arName")}
              // InputProps={{
              //   classes: {
              //     notchedOutline: getInputClasses("arName")
              //   }
              // }}
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
          </Grid>
          <Grid xs={3} container direction="column" item>
            <TextField
              className={classes.inputs}
              variant="standard"
              label="اسم المدينة انجليزي"
              name="enName"
              {...formik.getFieldProps("enName")}
              // InputProps={{
              //   classes: {
              //     notchedOutline: getInputClasses("enName")
              //   }
              // }}
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
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="contained" color="primary">
              {loading && <span className="ml-3 spinner spinner-white"></span>}
              اضافة مدينة
            </Button>
          </Grid>
          <Grid container xs={4} item justify="center">
            {openSnackBar ? (
              error ? (
                <Alert
                  className={classes.alert}
                  variant="outlined"
                  severity="error"
                >
                  {error}
                  <IconButton onClick={closeAlert}>
                    <ClearIcon />
                  </IconButton>
                </Alert>
              ) : (
                <Alert
                  className={classes.alert}
                  variant="outlined"
                  severity="success"
                >
                  تمت اضافة المدينة بنجاح
                  <IconButton onClick={closeAlert}>
                    <ClearIcon />
                  </IconButton>
                </Alert>
              )
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default CitiesHeader;
