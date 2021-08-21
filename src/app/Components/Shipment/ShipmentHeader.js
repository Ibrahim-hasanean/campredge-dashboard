import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddShipment from "./AddShipment";
const ShipmentHeader = ({ shipments, setShipments }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOpenAdd = () => {
    setOpen(true);
  };

  const handleCloseAdd = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.header} container justify="space-between">
      <Typography variant="h4">صفحة الشحنات</Typography>
      <Button onClick={handleOpenAdd} variant="contained" color="primary">
        اضافة شحنة
      </Button>
      <PopUp
        handleClose={handleCloseAdd}
        open={open}
        maxWidth="lg"
        title="اضافة شحنة جديدة"
      >
        <AddShipment
          handleClose={handleCloseAdd}
          shipments={shipments}
          setShipments={setShipments}
        />
      </PopUp>
    </Grid>
  );
};

export default ShipmentHeader;
