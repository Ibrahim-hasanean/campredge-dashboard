import { Button, Grid } from "@material-ui/core";
import React from "react";
import useStyle from "./style";
import { suspendUser } from "../../../api/Users/index";
import { API_COMMON_STATUS } from "helpers/api-helper";

const DeleteUser = ({ user, users, setUsers, handleClose }) => {
  const classes = useStyle();
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
      handleClose();
    }
  };
  return (
    <Grid
      className={classes.deleteUser}
      container
      xs={12}
      justify="space-around"
    >
      <Button
        onClick={toggleActivateUser}
        variant="contained"
        color={user.allowedToUseApp ? "secondary" : "primary"}
      >
        {user.allowedToUseApp ? "ايقاف" : "تنشيط"}
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeleteUser;
