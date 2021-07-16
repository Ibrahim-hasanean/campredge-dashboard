import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from "@material-ui/core";

const CustomDialog = ({
  open,
  handleClose,
  title,
  contentText,
  children,
  maxWidth = "md"
}) => {
  return (
    <>
      <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
