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
import { addVillage } from "../../../api/Village/index";
import ClearIcon from "@material-ui/icons/Clear";
const VillageHeader = ({ city, cities, setCities }) => {
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

  const initialValues = {
    cityId: city._id,
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
        cityId: values.cityId,
        name: {
          ar: values.arName,
          en: values.enName
        }
      };
      addVillage(data)
        .then(async response => {
          console.log(response, "add village response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data.village);
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
          console.log(err);
          disableLoading();
          setSubmitting(false);
          setError("خطأ غير معروف");
          setOpenSnackBar(true);
        });
    }
  });

  return (
    <Grid container>
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

export default VillageHeader;
