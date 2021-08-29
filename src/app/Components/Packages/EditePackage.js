import React, { useState } from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import useStyle from "./style";
import * as yup from "yup";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { editePackage } from "../../../api/packages/index";
import RTLProvider from "../RTLProvider";

const EditePackage = ({ pack, handleClose, setPackages, packages }) => {
  const classes = useStyle();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const cancel = () => {
    handleClose();
  };
  const initialValues = {
    arName: pack.name.ar,
    enName: pack.name.en,
    ardescription: pack.description.ar,
    endescription: pack.description.en,
    duration: pack.duration,
    price: pack.price,
    discountPrice: pack.discountPrice || ""
  };
  const schema = yup.object().shape({
    arName: yup.string().required("هذا الحقل مطلوب"),
    enName: yup.string().required("هذا الحقل مطلوب"),
    ardescription: yup.string().required("هذا الحقل مطلوب"),
    endescription: yup.string().required("هذا الحقل مطلوب"),
    duration: yup.number().required("هذا الحقل مطلوب"),
    price: yup.number().required("هذا الحقل مطلوب"),
    discountPrice: yup.number()
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const data = {
        name: { ar: values.arName, en: values.enName },
        description: {
          ar: values.ardescription,
          en: values.endescription
        },
        duration: values.duration,
        price: values.price,
        discountPrice: values.discountPrice
      };
      let response = await editePackage(data, pack._id);

      if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
        let newPackages = packages;
        let updatedPackages = response.data.package;
        let oldPackageIndex = newPackages.findIndex(
          x => x._id === updatedPackages._id
        );
        newPackages[oldPackageIndex] = updatedPackages;
        console.log(setPackages);
        setPackages([...newPackages]);
        setOpenSnackBar(true);
        setSubmitting(false);
        disableLoading();
        handleClose();
      } else if (response.responseStatus === API_COMMON_STATUS.CONFLICT) {
        setSubmitting(false);
        setError(response.message);
        setOpenSnackBar(true);
        disableLoading();
      } else if (response.responseStatus === API_COMMON_STATUS.ERROR) {
        setSubmitting(false);
        setError(response.message);
        setOpenSnackBar(true);
        disableLoading();
      }
    }
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
              تمت تعديل الباقة بنجاح
            </Alert>
          )
        ) : (
          <div></div>
        )}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="arName"
          label="اسم الباقة بالعربي"
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
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="enName"
          label="اسم الباقة بالانجليزي"
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
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="ardescription"
          label="وصف الباقة بالعربي"
          multiline
          rows={4}
          {...formik.getFieldProps("ardescription")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("ardescription")
            }
          }}
        />
        {formik.touched.ardescription && formik.errors.ardescription ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.ardescription}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="endescription"
          label="وصف الباقة بالانجليزي"
          multiline
          rows={4}
          {...formik.getFieldProps("endescription")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("endescription")
            }
          }}
        />
        {formik.touched.endescription && formik.errors.endescription ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.endescription}
          </Typography>
        ) : null}
        <TextField
          type="number"
          className={classes.inputs}
          variant="outlined"
          name="duration"
          label="المدة"
          {...formik.getFieldProps("duration")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("duration")
            }
          }}
        />
        {formik.touched.duration && formik.errors.duration ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.duration}
          </Typography>
        ) : null}
        <TextField
          type="number"
          className={classes.inputs}
          variant="outlined"
          name="price"
          label="السعر"
          {...formik.getFieldProps("price")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("price")
            }
          }}
        />
        {formik.touched.price && formik.errors.price ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.price}
          </Typography>
        ) : null}
        <TextField
          type="number"
          className={classes.inputs}
          variant="outlined"
          name="discountPrice"
          label="السعر بعد الخصم"
          {...formik.getFieldProps("discountPrice")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("discountPrice")
            }
          }}
        />
        {formik.touched.discountPrice && formik.errors.discountPrice ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.discountPrice}
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
            تعديل
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

export default EditePackage;
