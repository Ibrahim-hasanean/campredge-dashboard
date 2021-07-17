import React from "react";
import { IconButton } from "@material-ui/core";
// import UserFormDialog from "../UserFormDialog";
import CustomMenu from "../CustomMenu";
import CustomDialog from "../CustomDialog";
import AddToWallet from "./components/AddToWallet";
import UserDetails from "./components/UserDetails";
import MoreIcon from "@material-ui/icons/More";
import { suspendUser, unSuspendUser } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { getUserMenuOptions } from "./constant";

const UsersTableActions = ({ user, updateSnackbarState, updateTableData }) => {
  const [openUserDetailsDialog, setOpenUserDetailsDialog] = React.useState(
    false
  );
  const [openUserWalletDialog, setOpenUserWalletDialog] = React.useState(false);
  const [isSuspended, setIsSuspended] = React.useState(user.suspend);
  const userId = user._id;

  const actionClickHandler = action => {
    if (action === "User details") {
      //open details dialog
      setOpenUserDetailsDialog(true);
    } else if (action === "Add to wallet") {
      // call add to wallet api
      setOpenUserWalletDialog(true);
    } else if (action === "Suspend user") {
      //call suspend user api
      suspendUserHandler();
    } else if (action === "UnSuspend user") {
      //call UnSuspend user api
      unSuspendUserHandler();
    }
  };

  const closeUserDetailsDialog = () => {
    setOpenUserDetailsDialog(false);
  };

  const closeUserWalletDialog = () => {
    setOpenUserWalletDialog(false);
  };

  const suspendUserHandler = () => {
    suspendUser(userId)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setIsSuspended(true);
          updateTableData();
          updateSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
        } else {
          updateSnackbarState({
            open: true,
            message: response.message || "Error 😥",
            variant: "error"
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  };

  const unSuspendUserHandler = () => {
    unSuspendUser(userId)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setIsSuspended(false);
          updateTableData();
          updateSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
        } else {
          updateSnackbarState({
            open: true,
            message: response.message || "Error 😥",
            variant: "error"
          });
        }
      })
      .catch(error => {
        console.log(error);
        updateSnackbarState({
          open: true,
          message: "Error 😥",
          variant: "error"
        });
      });
  };

  return (
    <>
      <CustomMenu
        options={getUserMenuOptions({ isSuspended })}
        button={IconButton}
        buttonContent={<MoreIcon />}
        itemClickHandler={actionClickHandler}
      />

      {openUserDetailsDialog && (
        <CustomDialog
          open={openUserDetailsDialog}
          handleClose={closeUserDetailsDialog}
          title={`${user.firstName} ${user.secondName} details`}
        >
          <UserDetails userId={userId} />
        </CustomDialog>
      )}

      {openUserWalletDialog && (
        <CustomDialog
          open={openUserWalletDialog}
          handleClose={closeUserWalletDialog}
          title={`Add to ${user.firstName || "😥"} ${user.secondName ||
            "😥"} wallet`}
          contentText={`You can add any amount to this user wallet`}
          maxWidth="xs"
        >
          <AddToWallet
            userId={userId}
            updateSnackbarState={updateSnackbarState}
            updateTableData={updateTableData}
            closeDialog={closeUserWalletDialog}
          />
        </CustomDialog>
      )}
    </>
  );
};

export default UsersTableActions;
