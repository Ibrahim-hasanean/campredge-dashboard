import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  Grid,
  Button,
  Typography,
  Select,
  InputLabel,
  FormControl
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { editeShipment } from "../../../api/Shipment/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { Alert } from "@material-ui/lab";
import RTLProvider from "../RTLProvider";

const useStyle = makeStyles(() => ({
  form: {
    minWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 15px"
  },
  inputs: {
    width: "90%",
    textAlign: "right",
    margin: "10px 0px"
  },
  date: {
    width: "90%",
    textAlign: "center",
    margin: "10px 0px"
  },
  buttonsContainer: {
    width: "90%"
  },
  buttons: {
    fontSize: "14px",
    width: "30%",
    margin: "10px 0px"
  },
  invalid: {
    border: "solid 1px red"
  },
  alert: {
    fontSize: "14px"
  },
  options: {
    width: "100%",
    padding: "5px"
  },
  select: {
    width: "100%"
  }
}));
const EditeShipment = ({ shipment, handleClose, shipments, setShipments }) => {
  const classes = useStyle();
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    shipmentNo: Yup.number().required("هذا الحقل مطلوب"),
    status: Yup.string().required("هذا الحقل مطلوب"),
    orderNo: Yup.number().required("هذا الحقل مطلوب")
  });

  const initialValues = {
    shipmentNo: shipment.shipmentNo,
    status: shipment.status,
    orderNo: shipment.order.orderNo
  };

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

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const data = {
        shipmentId: shipment._id,
        shipmentNo: values.shipmentNo,
        status: values.status,
        orderNo: values.orderNo
      };
      editeShipment(data)
        .then(response => {
          console.log(response, "edite shipment response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data.shipment);
            let newShipments = shipments;
            let updatedShipment = response.data.shipment;
            let oldShipmentIndex = newShipments.findIndex(
              x => x._id === updatedShipment._id
            );
            newShipments[oldShipmentIndex] = updatedShipment;
            setShipments([...newShipments]);
            formik.resetForm();
            setOpenSnackBar(true);
            setSubmitting(false);
            handleClose();
          } else if (response.responseStatus === API_COMMON_STATUS.CONFLICT) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          } else if (
            response.responseStatus === API_COMMON_STATUS.BAD_REQUEST
          ) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          } else if (response.responseStatus === API_COMMON_STATUS.ERROR) {
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
              تمت اضافة الشحنة بنجاح
            </Alert>
          )
        ) : (
          <div></div>
        )}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="shipmentNo"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("shipmentNo")
            }
          }}
          label="رقم الشحنة"
          {...formik.getFieldProps("shipmentNo")}
        />
        {formik.touched.shipmentNo && formik.errors.shipmentNo ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.shipmentNo}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="orderNo"
          label="رقم الطلب"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("orderNo")
            }
          }}
          {...formik.getFieldProps("orderNo")}
        />
        {formik.touched.orderNo && formik.errors.orderNo ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.orderNo}
          </Typography>
        ) : null}
        <FormControl className={classes.inputs}>
          <InputLabel id="demo-simple-select-label">حالة الشحنة</InputLabel>
          <Select
            className={classes.select}
            name="status"
            {...formik.getFieldProps("status")}
            label="حالة الشحنة"
          >
            <option className={classes.options} value="shipped">
              shipped
            </option>
            <option className={classes.options} value="delivered">
              delivered
            </option>
          </Select>
        </FormControl>
        {formik.touched.status && formik.errors.status ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.status}
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

export default EditeShipment;
