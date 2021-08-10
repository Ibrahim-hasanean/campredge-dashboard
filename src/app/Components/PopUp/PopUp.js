import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const PopUp = ({ open, handleClose, title, maxWidth, children }) => {
  return (
    <Dialog maxWidth={maxWidth} onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default PopUp;
