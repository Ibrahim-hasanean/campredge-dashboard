import React, { useCallback, useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import { getPackges as getAllPackges } from "../../../../api/packages/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import useStyle from "./style";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const OrdersFilter = ({ getData }) => {
  const classes = useStyle();
  const [packages, setPackages] = useState([]);
  const [data, setData] = useState({
    date: "",
    packageId: "",
    status: "",
    orderNo: ""
  });
  const history = useHistory();

  const getPackages = useCallback(
    async query => {
      let q = query || "";
      let packges = await getAllPackges(q);
      if (packges.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
        return history.push("/logout");
      }
      console.log(packges);
      setPackages([...packges.data?.packages]);
    },
    [history]
  );

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const search = async () => {
    let query = "";
    if (data.date) query = query + `&date=${data.date}`;
    if (data.packageId) query = query + `&packageId=${data.packageId}`;
    if (data.status) query = query + `&status=${data.status}`;
    if (data.orderNo) query = query + `&orderNo=${data.orderNo}`;
    console.log(query);
    getData(query);
  };

  const reset = () => {
    getData();
    setData({ date: "", packageId: "", status: "", orderNo: "" });
  };

  useEffect(() => {
    getPackages();
  }, [getPackages]);

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">نوع الباقة</InputLabel>
        <Select
          value={data.packageId}
          className={classes.select}
          onChange={handleChange}
          name="packageId"
        >
          {packages.map((pack, index) => (
            <option className={classes.options} key={index} value={pack._id}>
              {pack.name.ar}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">حالة الطلب</InputLabel>
        <Select
          name="status"
          className={classes.select}
          onChange={handleChange}
          value={data.status}
        >
          <option className={classes.options} value="delivered">
            تم التوصيل
          </option>
          <option className={classes.options} value="pending">
            معلق
          </option>
          <option className={classes.options} value="canceled">
            تم الغاؤه
          </option>
        </Select>
      </FormControl>
      <TextField
        onChange={handleChange}
        className={classes.inputs}
        variant="standard"
        name="orderNo"
        label="رقم الطلب"
        type="number"
        value={data.orderNo}
      />

      <TextField
        onChange={handleChange}
        className={classes.inputs}
        variant="standard"
        name="date"
        type="date"
        value={data.date}
        id="orderDate"
      />

      <Button
        className={classes.searchButton}
        variant="contained"
        color="primary"
        onClick={search}
      >
        بحث
      </Button>
      <Button
        className={classes.searchButton}
        variant="contained"
        color="default"
        onClick={reset}
      >
        تفريغ الحقول
      </Button>
    </>
  );
};

export default OrdersFilter;
