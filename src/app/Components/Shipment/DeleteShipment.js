import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { delteShipment } from "../../../api/Shipment/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
const useStyle = makeStyles(() => ({
  root: {
    padding: "20px"
  }
}));
const DeleteShipment = ({ handleClose, shipment, setShipments, shipments }) => {
  const classes = useStyle();

  const deleteShip = async () => {
    let response = await delteShipment(shipment._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      let newShipments = shipments.filter(x => x._id !== shipment._id);
      setShipments([...newShipments]);
      handleClose();
    }
  };
  return (
    <Grid className={classes.root} container xs={12} justify="space-around">
      <Button onClick={deleteShip} variant="contained" color="secondary">
        حذف الشحنة
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeleteShipment;
