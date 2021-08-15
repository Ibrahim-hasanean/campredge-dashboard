import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PopUp from "../PopUp/PopUp";
import EditeUser from "./EditeUser";
import DeleteUser from "./DeleteUser";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const UsersRows = ({ user, index, users, setUsers }) => {
  const classes = useStyle();
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const OpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const OpenUpdate = () => {
    setOpenUpdate(true);
  };

  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.fullName || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.email || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.phoneNum || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.activityLevel || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.dietGoal || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.dob ? new Date(user.dob).toLocaleDateString() : "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {user.gender || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={() => OpenUpdate()}>
            <EditIcon fontSize="inherit" className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={() => OpenDelete()}>
            {user.allowedToUseApp ? (
              <DeleteIcon fontSize="inherit" color="secondary" />
            ) : (
              <CheckCircleIcon
                className={classes.activateIcon}
                fontSize="inherit"
              />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <PopUp
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title={`تحديث بيانات المستخدم ${user.fullName}`}
      >
        <EditeUser
          handleClose={handleCloseUpdate}
          user={user}
          users={users}
          setUsers={setUsers}
        />
      </PopUp>
      <PopUp
        handleClose={handleCloseDelete}
        open={openDelete}
        title={
          user.allowedToUseApp
            ? `هل تريد بالتكايد ايقاف المستخدم ${user.fullName}`
            : `هل تريد بالتكايد تنشيط المستخدم ${user.fullName}`
        }
      >
        <DeleteUser
          handleClose={handleCloseDelete}
          user={user}
          users={users}
          setUsers={setUsers}
        />
      </PopUp>
    </>
  );
};

export default UsersRows;
