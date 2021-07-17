import React from "react";
import CustomInput from "../../../CustomInput";
import CustomButton from "../../../CustomButton";
import { InputAdornment, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { addToUserWallet } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useStyles } from "./style";

const AddToWallet = ({
  userId,
  updateSnackbarState,
  updateTableData,
  closeDialog
}) => {
  const classes = useStyles();
  const [wallet, setWallet] = React.useState("");

  const addToWalletSubmitHandler = event => {
    event.preventDefault();
    const userData = {
      userId,
      amount: +wallet
    };
    addToUserWallet(userData)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          updateTableData();
          updateSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
          closeDialog();
        } else {
          updateSnackbarState({
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
    <form className={classes.form} onSubmit={addToWalletSubmitHandler}>
      <CustomInput
        placeholder="Add to wallet"
        name="wallet"
        type="number"
        value={wallet}
        onChange={event => setWallet(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={addToWalletSubmitHandler}>
                <AddCircleIcon color="primary" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <CustomButton type="submit" size="small">
        Add
      </CustomButton>
    </form>
  );
};

export default AddToWallet;
