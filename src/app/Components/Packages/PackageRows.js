import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PopUp from "../PopUp/PopUp";
import EditePackage from "./EditePackage";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeletePackage from "./DeletePackage";

// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const PackageRows = ({ pack, index, packages, setPackages }) => {
  const classes = useStyle();
  const [openEdite, setOpenEdite] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };
  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.name?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.description?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.description?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.isActive ? "مفعلة" : "غير مفعلة"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.quantity || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.price || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.discount || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.mostDuration || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={() => handleOpenEdite()}>
            <EditIcon fontSize="inherit" className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={() => handleOpenDelete()}>
            {pack.isActive ? (
              <DeleteIcon fontSize="inherit" color="secondary" />
            ) : (
              <CheckCircleIcon className={classes.active} fontSize="inherit" />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <PopUp
        open={openEdite}
        handleClose={handleCloseEdite}
        title="تعديل الباقة"
        maxWidth="lg"
      >
        <EditePackage
          pack={pack}
          packages={packages}
          setPackages={setPackages}
          handleClose={handleCloseEdite}
        />
      </PopUp>
      <PopUp
        open={openDelete}
        handleClose={handleCloseDelete}
        title={`  هل تريد بالتاكيد ايقاف الباقة ${pack.name.ar}`}
      >
        <DeletePackage
          pack={pack}
          packages={packages}
          handleClose={handleCloseDelete}
          setPackages={setPackages}
        />
      </PopUp>
    </>
  );
};

export default PackageRows;
