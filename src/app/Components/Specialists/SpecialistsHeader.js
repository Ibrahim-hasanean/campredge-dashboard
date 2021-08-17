import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddSpecialise from "./AddSpecialise";
const SpecialistsHeader = ({ specialists, setSpecialists }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Grid container item xs={12} className={classes.header}>
      <Grid container item xs={12} justify="space-between">
        <Typography variant="h4">الأخصائيين</Typography>
        <Button onClick={handleOpen} variant="contained" color="primary">
          اضافة أخصائي
        </Button>
      </Grid>
      {/* <Grid container item xs={12} justify="center">
      </Grid> */}
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
