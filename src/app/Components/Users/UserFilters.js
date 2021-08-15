import React, { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  TextField,
  Button
} from "@material-ui/core";
import useStyle from "./style";

const UserFilters = ({ getData }) => {
  const classes = useStyle();
  const [data, setData] = useState({
    dietGoal: null,
    activityLevel: null,
    gender: null,
    text: null
  });
  const filters = [
    {
      text: "هدف الدايت",
      name: "dietGoal",
      values: ["خسارة الوزن", "حياة صحية"]
    },
    {
      text: "نشاط المستخدم",
      name: "activityLevel",
      values: ["نشيط", "متوسط", "قليل", "خامل"]
    },
    { text: "جنس المستخدم", name: "gender", values: ["ذكر", "أنثى"] }
  ];
  const search = async () => {
    let query = "";
    if (data.dietGoal) query = query + `&dietGoal=${data.dietGoal}`;
    if (data.activityLevel)
      query = query + `&activityLevel=${data.activityLevel}`;
    if (data.gender) query = query + `&gender=${data.gender}`;
    if (data.fullName) query = query + `&text=${data.fullName}`;
    console.log(query);
    getData(query);
  };

  const reset = () => {
    getData();
    setData({ dietGoal: null, activityLevel: null, gender: null, text: null });
  };

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      {filters.map((filter, index) => (
        <FormControl key={filter.text} className={classes.formControl}>
          <InputLabel
            className={classes.inputLabel}
            htmlFor="age-native-simple"
          >
            {filter.text}
          </InputLabel>
          <Select
            value={data[filter.name]}
            onChange={handleChange}
            name={filter.name}
            className={classes.select}
          >
            {filter.values.map((opt, i) => (
              <option key={opt} className={classes.options} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </FormControl>
      ))}
      <TextField
        onChange={handleChange}
        className={classes.inputs}
        variant="standard"
        name="fullName"
        label="اسم الستخدم"
        value={data.text}
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

export default UserFilters;
