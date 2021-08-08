import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormattedMessage, injectIntl } from "react-intl";
import { login } from "api/Auth";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { GlobalContext } from "contexts/GlobalState";
import { GLOBALSTATE_ACTIONS } from "app/constants";
import { Typography } from "@material-ui/core";
const initialValues = {
  email: "",
  password: ""
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [, dispatch] = React.useContext(GlobalContext);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("الايميل غير صحيح")
      .required("الايميل مطلوب"),
    password: Yup.string()
      .min(5, "حد ادنى 5  احرف/ارقام/رموز")
      .max(50, "حد اقصى 50 احرف/ارقام/رموز ")
      .required("كلمة السر مطلوبة")
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const loginData = {
        email: values.email,
        password: values.password
      };

      login(loginData)
        .then(response => {
          console.log(response, "login response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            dispatch({ type: GLOBALSTATE_ACTIONS.SET_IS_AUTH, data: response });
          } else if (response.responseStatus === API_COMMON_STATUS.ERROR) {
            setSubmitting(false);
            setStatus(
              intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_LOGIN"
              })
            );
          }
        })
        .catch(err => {
          disableLoading();
          setSubmitting(false);
          setStatus(
            intl.formatMessage({
              id: "AUTH.VALIDATION.INVALID_LOGIN"
            })
          );
        });
    }
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <Typography variant="h4">تسجيل الدخول</Typography>
        </h3>
        <p className="text-muted font-weight-bold">أدخل ايميلك و كلمة السر</p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
            <div className="alert-text">
              أرجو ادخال <strong>الايميل</strong> و <strong>كلمة السر</strong>{" "}
              للدخول.
            </div>
          </div>
        )}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="example@gmail.com"
            type="tel"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-center align-items-center">
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>
              <FormattedMessage id="AUTH.LOGIN.BUTTON" />
            </span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(Login);
