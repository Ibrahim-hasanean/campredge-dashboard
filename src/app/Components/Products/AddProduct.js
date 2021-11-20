import React, { useState, useRef } from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { Alert } from "@material-ui/lab";
import RTLProvider from "../RTLProvider";
import useStyle from "./style";
import { addProduct } from "../../../api/Products/index";

const AddProduct = ({
  packages,
  productsTypes,
  products,
  setProducts,
  handleClose
}) => {
  const classes = useStyle();
  // const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [error, setError] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();
  const initialValues = {
    arName: "",
    enName: "",
    arPreparation: "",
    enPreparation: "",
    arInfo: "",
    enInfo: "",
    typeId: ""
  };
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  let types = {
    arName: Yup.string().required("هذا الحقل مطلوب"),
    enName: Yup.string().required("هذا الحقل مطلوب"),
    arPreparation: Yup.string().required("هذا الحقل مطلوب"),
    enPreparation: Yup.string().required("هذا الحقل مطلوب"),
    arInfo: Yup.string().required("هذا الحقل مطلوب"),
    enInfo: Yup.string().required("هذا الحقل مطلوب"),
    typeId: Yup.string().required("هذا الحقل مطلوب")
  };
  packages.forEach(pack => {
    types[`${pack._id}min`] = Yup.number();
    types[`${pack._id}max`] = Yup.number();
    initialValues[`${pack._id}min`] = 0;
    initialValues[`${pack._id}max`] = "";
  });
  const schema = Yup.object().shape(types);

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      const data = {
        name: {
          ar: values.arName,
          en: values.enName
        },
        preparation: {
          ar: values.arPreparation,
          en: values.enPreparation
        },
        info: {
          ar: values.arInfo,
          en: values.enInfo
        },
        typeId: values.typeId,
        amount: [],
        image
      };
      packages.forEach(pack => {
        data.amount = [
          ...data.amount,
          {
            package: pack._id,
            min: values[`${pack._id}min`],
            max: values[`${pack._id}max`]
          }
        ];
      });
      let formData = new FormData();
      let dataKeys = Object.keys(data);
      formData.append("name", JSON.stringify(data.name));
      formData.append("typeId", data.typeId);
      formData.append("preparation", JSON.stringify(data.preparation));
      formData.append("info", JSON.stringify(data.info));
      formData.append("image", image);
      formData.append("amount", JSON.stringify(data.amount));
      dataKeys.forEach(key => {
        console.log(key, formData.get(key));
      });
      addProduct(formData)
        .then(response => {
          console.log(response, "add product response");
          disableLoading();
          if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
            console.log(response.data);
            let newProducts = products;
            newProducts.unshift(response.data.product);
            setProducts([...newProducts]);
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
          } else if (
            response.responseStatus === API_COMMON_STATUS.Valid_Error
          ) {
            setSubmitting(false);
            setError(response.message);
            setOpenSnackBar(true);
          } else if (response.responseStatus === API_COMMON_STATUS.FAILED) {
            setSubmitting(false);
            setError("خطا غير معروف");
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

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const cancel = () => {
    handleClose();
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

  const openSelectImage = () => {
    fileRef.current.click();
  };

  const handleImageChange = e => {
    let file = e.target.files[0];
    console.log(file.type);
    // setImage(file);
    if (SUPPORTED_FORMATS.includes(file.type)) return setImage(file);
    setImageError("يجب الصورة ان تكون بصيغة png او jpeg او jpg");
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
          name="arName"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("arName")
            }
          }}
          label="اسم المنتج عربي"
          {...formik.getFieldProps("arName")}
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
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("enName")
            }
          }}
          label="اسم المنتج انجليزي"
          {...formik.getFieldProps("enName")}
        />
        {formik.touched.enName && formik.errors.enName ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.enName}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="arInfo"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("arInfo")
            }
          }}
          label="معلومات عن المنتج عربي"
          {...formik.getFieldProps("arInfo")}
        />
        {formik.touched.arInfo && formik.errors.arInfo ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.arInfo}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="enInfo"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("enInfo")
            }
          }}
          label="معلومات عن المنتج انجليزي"
          {...formik.getFieldProps("enInfo")}
        />
        {formik.touched.enInfo && formik.errors.enInfo ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.enInfo}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="arPreparation"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("arPreparation")
            }
          }}
          label="طريقة التحضير عربي"
          {...formik.getFieldProps("arPreparation")}
        />
        {formik.touched.arPreparation && formik.errors.arPreparation ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.arPreparation}
          </Typography>
        ) : null}
        <TextField
          className={classes.inputs}
          variant="outlined"
          name="enPreparation"
          InputProps={{
            classes: {
              notchedOutline: getInputClasses("enPreparation")
            }
          }}
          label="طريقة التحضير انجليزي"
          {...formik.getFieldProps("enPreparation")}
        />
        {formik.touched.enPreparation && formik.errors.enPreparation ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.enPreparation}
          </Typography>
        ) : null}
        <FormControl className={classes.inputs}>
          <InputLabel>نوع المنتج</InputLabel>
          <Select
            className={classes.select}
            name="typeId"
            {...formik.getFieldProps("typeId")}
            defaultValue={""}
          >
            {productsTypes.map(type => (
              <option
                key={type._id}
                className={classes.options}
                value={type._id}
              >
                {type.name}
              </option>
            ))}
          </Select>
          {formik.touched.typeId && formik.errors.typeId ? (
            <Typography color="secondary" variant="body2">
              {formik.errors.typeId}
            </Typography>
          ) : null}
        </FormControl>
        <input
          className={classes.inputs}
          variant="outlined"
          name="image"
          type="file"
          ref={fileRef}
          hidden
          label="صورة المنتج"
          onChange={handleImageChange}
        />
        <Button
          className={classes.inputs}
          color="primary"
          onClick={openSelectImage}
          variant="contained"
        >
          اختر صورة للمنتج
        </Button>
        {imageError ? (
          <Typography color="secondary" variant="body2">
            {formik.errors.enName}
          </Typography>
        ) : null}
        {packages &&
          packages.length > 0 &&
          packages.map(pack => (
            <Grid
              container
              justify="center"
              className={classes.buttonsContainer}
              key={pack._id}
            >
              <Grid container item xs={4} justify="flex-start">
                <Typography variant="h6">{pack.name.ar}</Typography>
              </Grid>
              <Grid container item xs={8} justify="space-between">
                <TextField
                  className={classes.maxMin}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: getInputClasses(`${pack._id}min`)
                    }
                  }}
                  label="حد أدنى"
                  type="number"
                  {...formik.getFieldProps(`${pack._id}min`)}
                />
                <TextField
                  className={classes.maxMin}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: getInputClasses(`${pack._id}max`)
                    }
                  }}
                  label="حد أقصى"
                  type="number"
                  {...formik.getFieldProps(`${pack._id}max`)}
                />
              </Grid>
            </Grid>
          ))}
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

export default AddProduct;
