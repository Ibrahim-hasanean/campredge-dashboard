import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormattedMessage, injectIntl } from "react-intl";
import { login } from "api/Auth";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { GlobalContext } from "contexts/GlobalState";
import { GLOBALSTATE_ACTIONS } from "app/constants";
import { phoneRegExp } from "helpers/generalRegex";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  phoneNumber: "",
  password: ""
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [, dispatch] = React.useContext(GlobalContext);

  const LoginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Wrong Phone number format")
      .min(10, "Minimum 10 symbols")
      .max(10, "Maximum 10 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD"
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD"
        })
      )
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
        phoneNumber: values.phoneNumber,
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
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>
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
              Please enter your <strong>Phone Number</strong> and{" "}
              <strong>Password</strong> to continue.
            </div>
          </div>
        )}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="059-912-3456"
            type="tel"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "phoneNumber"
            )}`}
            name="phoneNumber"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.phoneNumber}</div>
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
        <div className="form-group d-flex flex-wrap justify-content-end align-items-center">
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
