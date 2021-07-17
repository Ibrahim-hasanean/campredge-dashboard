import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { useStyles } from "./style";

const UserLoading = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.loadingContainer}
    >
      <Typography align="center" variant="h5" gutterBottom>
        loading...
      </Typography>
      <CircularProgress size={50} />
    </Grid>
  );
};

export default UserLoading;
