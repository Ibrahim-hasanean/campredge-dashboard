import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import Switch from "@material-ui/core/Switch";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import EditeSpecialise from "./EditeSpecialise";

const SpecialistsRows = ({ spec, specialists, setSpecialists, index }) => {
  const classes = useStyle();
  const [openEdite, setOpenEdite] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };

  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {spec.fullName || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {spec.email || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {spec.phoneNum || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenEdite}>
          <EditIcon className={classes.editeIcon} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <Switch />
      </TableCell>
      <PopUp
        title="تعديل الأخصائي"
        open={openEdite}
        handleClose={handleCloseEdite}
      >
        <EditeSpecialise
          spec={spec}
          specialists={specialists}
          setSpecialists={setSpecialists}
          handleClose={handleCloseEdite}
        />
      </PopUp>
    </TableRow>
  );
};

export default SpecialistsRows;
