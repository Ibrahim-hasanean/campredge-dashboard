import React, { useState } from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import NewUserForm from "./NewUserForm";

const useStyle = makeStyles(() => ({
  root: {
    padding: "30px 15px"
  },
  button: {
    color: "white",
    fontWeight: "600",
    fontSize: "14px"
  }
}));

const UsersHeader = ({ users, setUsers }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      className={classes.root}
      container
      item
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h4">المستخدمين</Typography>
      <Button
        onClick={() => handleOpen()}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        اضافة مستخدم
      </Button>
      <PopUp
        open={open}
        handleClose={handleClose}
        maxWidth="lg"
        title="اضافة مستخدم جديد"
      >
        <NewUserForm
          users={users}
          setUsers={setUsers}
          handleClose={handleClose}
        />
      </PopUp>
    </Grid>
  );
};

export default UsersHeader;
