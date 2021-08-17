import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  Grid,
  Button,
  Typography
  // FormControl,
  // InputLabel,
  // Select
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { updateUser } from "../../../api/Users/index";
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
  options: {
    width: "100%",
    textAlign: "right",
    padding: "10px 0px"
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
  }
}));
const EditeUser = ({ user, handleClose, users, setUsers }) => {
  const classes = useStyle();
  // const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    fullName: Yup.string().required(" اسم المستخدم مطلوب"),
    email: Yup.string()
      .email("الايميل غير صحيح")
      .required("الايميل مطلوب"),
    phoneNum: Yup.number("رقم الجوال غير غير صحيح").required(
      "رقم الجوال مطلوب"
    ),
    dob: Yup.date(),
    gender: Yup.string().matches(/(ذكر|أنثى)/)
  });
  const initialValues = {
    fullName: user.fullName,
    email: user.email,
    phoneNum: user.phoneNum
    // dob: user.dob,
    // gender: user.gender
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
        fullName: values.fullName,
        email: values.email,
        phoneNum: values.phoneNum
        // dob: values.dob,
        // gender: values.gender
      };
      console.log(data);
      updateUser(user._id, data)
        .then(response => {
          console.log(response, "update user response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data.user);
            let newUsers = users;
            let updatedUser = response.data.user;
            let oldUserIndex = newUsers.findIndex(
              x => x._id === updatedUser._id
            );
            newUsers[oldUserIndex] = updatedUser;
            setUsers([...newUsers]);
            formik.resetForm();
            setOpenSnackBar(true);
            // handleClose();
          } else if (response.responseStatus === API_COMMON_STATUS.CONFLICT) {
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
              تمت تعديل المستخدم بنجاح
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
          label="اسم الستخدم"
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
          label="ايميل الستخدم"
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
          label="جوال الستخدم"
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
        {/* <TextField
          className={classes.date}
          variant="outlined"
          name="dob"
          placeholder="تاريخ الميلاد"
          type="date"
          {...formik.getFieldProps("dob")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("dob")
            }
          }}
        />
        {formik.touched.dob && formik.errors.dob ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.dob}
          </Typography>
        ) : null}
        <FormControl className={classes.inputs}>
          <InputLabel>جنس المسشتخدم</InputLabel>
          <Select
            className={classes.inputs}
            name="gender"
            {...formik.getFieldProps("gender")}
            defaultValue=""
          >
            <option className={classes.options} value="ذكر">
              ذكر
            </option>
            <option className={classes.options} value="أنثى">
              أنثى
            </option>
          </Select>
          {formik.touched.gender && formik.errors.gender ? (
            <Typography color="secondary" variant="body2">
              {formik.errors.gender}
            </Typography>
          ) : null}
        </FormControl> */}

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
            onClick={cancel}
          >
            الغاء
          </Button>
        </Grid>
      </form>
    </RTLProvider>
  );
};

export default EditeUser;
