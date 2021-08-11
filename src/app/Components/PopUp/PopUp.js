import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  title: {
    widht: "100%",
    textAlign: "center"
  }
}));

const PopUp = ({ open, handleClose, title, maxWidth, children }) => {
  const classes = useStyle();
  return (
    <Dialog maxWidth={maxWidth} onClose={handleClose} open={open}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default PopUp;
