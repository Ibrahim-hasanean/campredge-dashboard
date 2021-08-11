import { Button, Grid } from "@material-ui/core";
import React from "react";
import useStyle from "./style";
const DeleteUser = ({ user, users, setUsers, handleClose }) => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.deleteUser}
      container
      xs={12}
      justify="space-around"
    >
      <Button variant="contained" color="secondary">
        ايقاف
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeleteUser;
