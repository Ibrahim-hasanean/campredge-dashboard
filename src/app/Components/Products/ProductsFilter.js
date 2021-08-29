import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import useStyle from "./style";
const ProductsFilter = ({ getData, productsTypes }) => {
  const classes = useStyle();
  const [data, setData] = useState({ productTypeId: "", text: "" });

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const search = () => {
    let query = "";
    if (data.productTypeId)
      query = query + `&productTypeId=${data.productTypeId}`;
    if (data.text) query = query + `&text=${data.text}`;
    getData(query);
  };

  const reset = () => {
    setData({ productTypeId: "", text: "" });
    getData();
  };

  return (
    <Grid container item xs={8} justify="flex-start" alignItems="flex-end">
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="age-native-simple">
          نوع المنتج
        </InputLabel>
        <Select
          value={data.productTypeId}
          onChange={handleChange}
          name="productTypeId"
          className={classes.select}
        >
          {productsTypes.map((type, index) => (
            <option className={classes.options} value={type._id} key={index}>
              {type.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <TextField
        value={data.text}
        label="اسم المنتج عربي/انجليزي"
        className={classes.formControl}
        name="text"
        onChange={handleChange}
      />
      <Button
        className={classes.formControl}
        variant="contained"
        color="primary"
        onClick={search}
      >
        ابحث
      </Button>
      <Button
        className={classes.formControl}
        variant="contained"
        color="default"
        onClick={reset}
      >
        تفريغ الحقول
      </Button>
    </Grid>
  );
};

export default ProductsFilter;
