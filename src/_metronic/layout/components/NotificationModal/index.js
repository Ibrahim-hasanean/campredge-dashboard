import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Tooltip
} from "@material-ui/core";
import { useStyles } from "./style";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import Snackbar from "../CustomSnackbar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { sendNotifications } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";

const NotificationModal = ({ selectedUsersIds }) => {
  const [openNotificationsModal, setOpenNotificationsModal] = React.useState(
    false
  );
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    message: "",
    variant: ""
  });
  const notificationFormRef = React.useRef(null);
  const classes = useStyles();

  const handleClickOpenNotificationsDialog = () => {
    setOpenNotificationsModal(true);
  };

  const handleCloseNotificationsDialog = () => {
    setOpenNotificationsModal(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState(prevSnackbarState => ({
      ...prevSnackbarState,
      open: false
    }));
  };

  const sendUsersNotification = event => {
    event.preventDefault();
    const formElement = notificationFormRef.current;

    const payload = {
      ids: selectedUsersIds,
      title: formElement[0].value,
      body: formElement[2].value
    };

    sendNotifications(payload)
      .then(response => {
        handleCloseNotificationsDialog();
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
        } else {
          setSnackbarState({
            open: true,
            message: response.message,
            variant: "error"
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  };

  return (
    <>
      <Tooltip title="Send Notification">
        <div>
          <CustomButton
            onClick={handleClickOpenNotificationsDialog}
            icon={<NotificationsIcon />}
          >
            Send Notification
          </CustomButton>
        </div>
      </Tooltip>
      <Dialog
        open={openNotificationsModal}
        onClose={handleCloseNotificationsDialog}
      >
        <DialogTitle>Send Notification to selected Users</DialogTitle>
        <form ref={notificationFormRef} onSubmit={sendUsersNotification}>
          <DialogContent className={classes.dialogContent}>
            <CustomInput
              size="medium"
              placeholder="Notification Title"
              name="notifyTitle"
              fullWidth
              margin="dense"
            />
            <CustomInput
              placeholder="Notification Body"
              name="notifyText"
              fullWidth
              multiline
              rows={12}
              rowsMax={13}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <CustomButton type="submit">submit</CustomButton>
            <Button onClick={handleCloseNotificationsDialog} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={!!snackbarState.open}
        handleClose={handleCloseSnackbar}
        type={snackbarState.variant}
        text={snackbarState.message}
      />
    </>
  );
};

export default NotificationModal;
