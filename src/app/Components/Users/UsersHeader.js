import React, { useState } from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import NewUserForm from "./NewUserForm";
import UserFilters from "./UserFilters";

const useStyle = makeStyles(() => ({
  root: {
    padding: "30px 15px"
  },
  button: {
    color: "white",
    fontWeight: "600",
    fontSize: "13px"
  }
}));

const UsersHeader = ({ users, setUsers, getData }) => {
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
      alignItems="flex-end"
      xs={12}
    >
      <Grid container item justify="center" xs={12}>
        <Typography variant="h4">المستخدمون</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="space-between"
        alignItems="flex-end"
      >
        <Grid container item xs={10} justify="flex-start" alignItems="flex-end">
          <UserFilters getData={getData} />
        </Grid>
        <Button
          onClick={() => handleOpen()}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          اضافة مستخدم
        </Button>
      </Grid>
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
