import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useStyle from "./style";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { addNewUser } from "../../../api/Users/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { Alert } from "@material-ui/lab";
import RTLProvider from "../../RTLProvider";
const AddOrder = ({ orders, setOrders }) => {
  const classes = useStyle();
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
  return (
    <form className={classes.form}>
      <TextField label="package name" />
    </form>
  );
};

export default AddOrder;
