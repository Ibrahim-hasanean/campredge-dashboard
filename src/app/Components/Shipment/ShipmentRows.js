import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PopUp from "../PopUp/PopUp";
import useStyle from "./style";
import EditeShipment from "./EditeShipment";
import DeleteShipment from "./DeleteShipment";
const ShipmentRows = ({ shipment, index, shipments, setShipments }) => {
  const classes = useStyle();
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.shipmentNo || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.status || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.order.orderNo || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.order.user.fullName || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.order.user.phoneNum || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {shipment.order.user.email || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={handleOpenUpdate}>
            <EditIcon fontSize="inherit" className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={handleOpenDelete}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </TableCell>
      </TableRow>
      <PopUp
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title={`تحديث بيانات الشحنة ${shipment.shipmentNo}`}
      >
        <EditeShipment
          handleClose={handleCloseUpdate}
          setShipments={setShipments}
          shipments={shipments}
          shipment={shipment}
        />
      </PopUp>
      <PopUp
        handleClose={handleCloseDelete}
        open={openDelete}
        title={`هل تريد بالتاكيد حذف الشحنة ${shipment.shipmentNo}`}
      >
        <DeleteShipment
          handleClose={handleCloseDelete}
          shipment={shipment}
          shipments={shipments}
          setShipments={setShipments}
        />
      </PopUp>
    </>
  );
};

export default ShipmentRows;
