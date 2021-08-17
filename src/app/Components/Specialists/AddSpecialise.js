import React, { useState } from "react";
import useStyle from "./style";
import { TextField, Typography, Grid, Button } from "@material-ui/core";
import RTLProvider from "../RTLProvider";
import * as yup from "yup";
import { useFormik } from "formik";
import { Alert } from "@material-ui/lab";
// import { API_COMMON_STATUS } from "helpers/api-helper";
// import { addNewSpecialist } from "../../../api/Specialists/index";
const AddSpecialise = ({ specialists, setSpecialists, handleClose }) => {
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  console.log(setError, setOpenSnackBar);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNum: ""
  };
  const enableLoading = () => {
    setLoading(true);
  };

  // const disableLoading = () => {
  //   setLoading(false);
  // };

  const schema = yup.object().shape({
    fullName: yup.string().required("هذا الحقل مطلوب"),
    email: yup.string().required("هذا الحقل مطلوب"),
    phoneNum: yup.string().required("هذا الحقل مطلوب")
  });

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return classes.invalid;
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const data = {
        fullName: values.fullName,
        email: values.email,
        phoneNum: values.phoneNum
      };
      console.log(data);
      //   addNewSpecialist(data)
      //     .then(response => {
      //       console.log(response, "add specialists response");
      //       disableLoading();
      //       if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      //         console.log(response.data.user);
      //         let newSpecialists = specialists;
      //         newSpecialists.unshift(response.data.specialist);
      //         setSpecialists([...newSpecialists]);
      //         formik.resetForm();
      //         setOpenSnackBar(true);
      //         setSubmitting(false);
      //         // handleClose();
      //       } else if (response.responseStatus === API_COMMON_STATUS.CONFLICT) {
      //         setSubmitting(false);
      //         setError(response.message);
      //         setOpenSnackBar(true);
      //       } else if (response.responseStatus === API_COMMON_STATUS.ERROR) {
      //         setSubmitting(false);
      //         setError(response.message);
      //         setOpenSnackBar(true);
      //       }
      //     })
      //     .catch(err => {
      //       disableLoading();
      //       setSubmitting(false);
      //       setError("خطأ غير معروف");
      //       setOpenSnackBar(true);
      //     });
    }
  });

  const cancel = () => {
    handleClose();
  };

  return (
    <RTLProvider>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {openSnackBar ? (
          error ? (
            <Alert
              className={classes.alert}
              variant="outlined"
              severity="error"
            >
              {error}
            </Alert>
          ) : (
            <Alert
              className={classes.alert}
              variant="outlined"
              severity="success"
            >
              تمت اضافة الأخصائي بنجاح
            </Alert>
          )
        ) : (
          <div></div>
        )}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="fullName"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("fullName")
            }
          }}
          label="اسم الأخصائي"
          {...formik.getFieldProps("fullName")}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.fullName}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="email"
          label="ايميل الأخصائي"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("email")
            }
          }}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.email}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="phoneNum"
          label="جوال الأخصائي"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("phoneNum")
            }
          }}
          {...formik.getFieldProps("phoneNum")}
        />
        {formik.touched.phoneNum && formik.errors.phoneNum ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.phoneNum}
          </Typography>
        ) : null}
        <Grid
          className={classes.buttonsContainer}
          container
          justify="space-between"
        >
          <Button
            type="submit"
            className={classes.buttons}
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            {loading && <span className="ml-3 spinner spinner-white"></span>}
            اضافة
          </Button>
          <Button
            className={classes.buttons}
            variant="contained"
            color="secondary"
            type="button"
            onClick={cancel}
          >
            الغاء
          </Button>
        </Grid>
      </form>
    </RTLProvider>
  );
};

export default AddSpecialise;
