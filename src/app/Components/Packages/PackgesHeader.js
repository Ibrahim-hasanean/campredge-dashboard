import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddPackage from "./AddPackage";
const PackgesHeader = ({ packages, setPackages }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      className={classes.headers}
      container
      item
      xs={12}
      justify="space-between"
      alignItems="center"
    >
      <Typography variant="h4">صفحة الباقات</Typography>
      <Button
        onClick={() => handleOpen()}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        اضافة باقة
      </Button>
      <PopUp
        maxWidth="lg"
        handleClose={handleClose}
        open={open}
        title="اضافة باقة جديدة"
      >
        <AddPackage
          packages={packages}
          handleClose={handleClose}
          setPackages={setPackages}
        />
      </PopUp>
    </Grid>
  );
};

export default PackgesHeader;
