import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  title: {
    widht: "100%",
    textAlign: "center",
    padding: "30px 15px 0 15px"
  }
}));

const PopUp = ({ open, handleClose, title, maxWidth, children }) => {
  const classes = useStyle();
  return (
    <Dialog
      className={classes.dialog}
      maxWidth={maxWidth}
      onClose={handleClose}
      open={open}
    >
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      {children}
    </Dialog>
  );
};

export default PopUp;
