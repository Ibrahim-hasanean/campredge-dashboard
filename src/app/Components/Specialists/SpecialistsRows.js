import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import Switch from "@material-ui/core/Switch";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import EditeSpecialise from "./EditeSpecialise";
import SpecialistUsers from "./SpecialistUsers";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { suspendSpec } from "api/Specialists";
const SpecialistsRows = ({ spec, specialists, setSpecialists, index }) => {
  const classes = useStyle();
  const [openEdite, setOpenEdite] = useState(false);
  const [openSpecUsers, setOpenSpecUsers] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };

  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  const handleOpenSpecUsers = () => {
    setOpenSpecUsers(true);
  };

  const handleCloseSpecUsers = () => {
    setOpenSpecUsers(false);
  };

  const toggleActivateUser = async () => {
    let response = await suspendSpec(spec._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      console.log(response.data.specialist);
      let oldUserIndex = specialists.findIndex(x => x._id === spec._id);
      let newSpecs = specialists;
      newSpecs[oldUserIndex] = {
        ...spec,
        allowedToUseApp: response.data.specialist.allowedToUseApp
      };
      setSpecialists([...newSpecs]);
    }
  };

  return (
    <TableRow className={classes.tableRow}>
      <TableCell
        onClick={() => handleOpenSpecUsers()}
        className={classes.tableCells}
        align="center"
      >
        {index + 1}
      </TableCell>
      <TableCell
        onClick={() => handleOpenSpecUsers()}
        className={classes.tableCells}
        align="center"
      >
        {spec.fullName || "_"}
      </TableCell>
      <TableCell
        onClick={() => handleOpenSpecUsers()}
        className={classes.tableCells}
        align="center"
      >
        {spec.email || "_"}
      </TableCell>
      <TableCell
        onClick={() => handleOpenSpecUsers()}
        className={classes.tableCells}
        align="center"
      >
        {spec.phoneNum || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenEdite}>
          <EditIcon className={classes.editeIcon} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <Switch
          checked={spec.allowedToUseApp}
          onChange={toggleActivateUser}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
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
      <PopUp
        title="مستخدمين يتبعون للأخصائي"
        open={openSpecUsers}
        handleClose={handleCloseSpecUsers}
        maxWidth="lg"
      >
        <SpecialistUsers users={spec.users} />
      </PopUp>
    </TableRow>
  );
};

export default SpecialistsRows;
