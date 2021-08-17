import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PopUp from "../PopUp/PopUp";
import EditeUser from "./EditeUser";
import Switch from "@material-ui/core/Switch";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { suspendUser } from "../../../api/Users/index";

const UsersRows = ({ user, index, users, setUsers }) => {
  const classes = useStyle();
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const OpenUpdate = () => {
    setOpenUpdate(true);
  };

  const toggleActivateUser = async () => {
    let response = await suspendUser(user._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      console.log(response.data.user);
      let oldUserIndex = users.findIndex(x => x._id === user._id);
      let newUsers = users;
      newUsers[oldUserIndex] = {
        ...user,
        allowedToUseApp: response.data.user.allowedToUseApp
      };
      setUsers([...newUsers]);
    }
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
          <IconButton>
            <Switch
              checked={user.allowedToUseApp}
              onChange={toggleActivateUser}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
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
    </>
  );
};

export default UsersRows;
