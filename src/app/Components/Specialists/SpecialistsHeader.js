import React, { useState } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddSpecialise from "./AddSpecialise";
const SpecialistsHeader = ({ specialists, setSpecialists, getData }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ text: "", email: "", phoneNum: "" });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const search = () => {
    let query = "";
    if (data.text) query = query + `&text=${data.text}`;
    if (data.email) query = query + `&email=${data.email}`;
    if (data.phoneNum) query = query + `&phoneNum=${data.phoneNum}`;
    console.log(query);
    getData(query);
  };
  const resetSearch = () => {
    setData({
      text: "",
      email: "",
      phoneNum: ""
    });
    getData();
  };

  return (
    <Grid container justify="center" className={classes.header}>
      <Typography variant="h4">الأخصائيين</Typography>
      <Grid item xs={12} container justify="space-between" alignItems="center">
        <Grid container item xs={10} justify="flex-start" alignItems="flex-end">
          <TextField
            onChange={handleChange}
            className={classes.leftRightMargin}
            label="اسم الاخصائي"
            name="text"
            value={data.text}
          />
          <TextField
            onChange={handleChange}
            className={classes.leftRightMargin}
            label="ايميل الاخصائي"
            name="email"
            value={data.email}
          />
          <TextField
            onChange={handleChange}
            className={classes.leftRightMargin}
            label="رقم جوال الأخصائي"
            name="phoneNum"
            value={data.phoneNum}
          />
          <Button
            onClick={search}
            className={classes.leftRightMargin}
            variant="contained"
            color="primary"
          >
            بحث
          </Button>
          <Button
            className={classes.leftRightMargin}
            variant="contained"
            color="default"
            onClick={resetSearch}
          >
            تفريغ الحقول
          </Button>
        </Grid>
        <Button onClick={handleOpen} variant="contained" color="primary">
          اضافة أخصائي
        </Button>
      </Grid>
      <PopUp title="اضافة أخصائي" open={open} handleClose={handleClose}>
        <AddSpecialise
          specialists={specialists}
          setSpecialists={setSpecialists}
          handleClose={handleClose}
        />
      </PopUp>
    </Grid>
  );
};

export default SpecialistsHeader;
