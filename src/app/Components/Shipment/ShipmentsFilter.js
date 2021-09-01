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

const ShipmentsFilter = ({ getData }) => {
  const [data, setData] = useState({ status: "", shipmentNo: "", orderNo: "" });
  const classes = useStyle();

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const search = () => {
    let query = "";
    if (data.status) query = query + `&status=${data.status}`;
    if (data.shipmentNo) query = query + `&shipmentNo=${data.shipmentNo}`;
    if (data.orderNo) query = query + `&orderNo=${data.orderNo}`;
    console.log(query);
    getData(query);
  };

  const reset = () => {
    setData({ productTypeId: "", shipmentNo: "", orderNo: "" });
    getData();
  };

  return (
    <Grid container item xs={10} justify="flex-start" alignItems="flex-end">
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="age-native-simple">
          نوع الشحنة
        </InputLabel>
        <Select
          onChange={handleChange}
          value={data.status}
          name="status"
          className={classes.select}
        >
          <option className={classes.options} value={"delivered"}>
            delivered
          </option>
          <option className={classes.options} value={"shipped"}>
            shipped
          </option>
        </Select>
      </FormControl>
      <TextField
        value={data.shipmentNo}
        label="رقم الشحنة"
        className={classes.formControl}
        name="shipmentNo"
        onChange={handleChange}
      />
      <TextField
        value={data.orderNo}
        label="رقم الاوردر"
        className={classes.formControl}
        name="orderNo"
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

export default ShipmentsFilter;