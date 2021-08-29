import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddShipment from "./AddShipment";
import ShipmentsFilter from "./ShipmentsFilter";
const ShipmentHeader = ({ shipments, setShipments, getData }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOpenAdd = () => {
    setOpen(true);
  };

  const handleCloseAdd = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.header} container>
      <Grid container item xs={12} justify="center">
        <Typography variant="h4">صفحة الشحنات</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="space-between"
        alignItems="flex-end"
      >
        <ShipmentsFilter getData={getData} />
        <Button onClick={handleOpenAdd} variant="contained" color="primary">
          اضافة شحنة
        </Button>
      </Grid>
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
