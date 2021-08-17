import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addNewUser } from "../../../api/Users/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { Alert } from "@material-ui/lab";
import RTLProvider from "../RTLProvider";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";

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
  }
}));
const NewUserForm = ({ handleClose, users, setUsers }) => {
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
    password: Yup.string()
      .min(5, "حد ادنى 5  احرف/ارقام/رموز")
      .max(50, "حد اقصى 50 احرف/ارقام/رموز ")
      .required("كلمة السر مطلوبة"),
    dob: Yup.date(),
    gender: Yup.string().matches(/(ذكر|أنثى)/)
  });
  const initialValues = {
    fullName: "",
    email: "",
    phoneNum: "",
    password: "",
    dob: "",
    gender: ""
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
        phoneNum: values.phoneNum,
        password: values.password,
        dob: values.dob,
        gender: values.gender
      };
      addNewUser(data)
        .then(response => {
          console.log(response, "add user response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data.user);
            let newUsers = users;
            newUsers.unshift(response.data.user);
            setUsers([...newUsers]);
            formik.resetForm();
            setOpenSnackBar(true);
            setSubmitting(false);
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
              تمت اضافة المستخدم بنجاح
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
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="password"
          label="كلمة سر الحساب"
          type="password"
          {...formik.getFieldProps("password")}
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("password")
            }
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.password}
          </Typography>
        ) : null}
        <TextField
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
        </FormControl>
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

export default NewUserForm;
