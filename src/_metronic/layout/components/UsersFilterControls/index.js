import React from "react";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import RadioGroup from "../RadioGroup";
// import UserFormDialog from "../UserFormDialog";
import { VERIFIED_RADIOS, SUSPEND_RADIOS } from "app/constants";
import { useStyles } from "./style";

const initailFilterValue = {
  firstName: "",
  secondName: "",
  phoneNumber: "",
  ordersNumber: "",
  verified: null,
  suspend: null
};
const UsersFilterControls = ({ onSearchClicked, onResetClicked }) => {
  const [filterData, setFilterData] = React.useState(initailFilterValue);
  const classes = useStyles();

  // const [openUserDialog, setOpenUserDialog] = React.useState(false);
  // const handleClickOpenUserDialog = () => {
  //   setOpenUserDialog(true);
  // };
  // const handleCloseUserDialog = () => {
  //   setOpenUserDialog(false);
  // };

  const changeHandler = event => {
    event.persist();
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      [event.target.name]: event.target.value
    }));
  };

  const resetFilter = () => {
    onResetClicked();
    setFilterData(initailFilterValue);
  };

  return (
    <Grid container spacing={2} className={classes.ordersFilterContainer}>
      <Grid item sm={3} xs={12}>
        <CustomInput
          placeholder="First Name"
          name="firstName"
          value={filterData.firstName}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item sm={3} xs={12}>
        <CustomInput
          placeholder="Second Name"
          name="secondName"
          value={filterData.secondName}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item sm={3} xs={12}>
        <CustomInput
          placeholder="Phone Number"
          name="phoneNumber"
          type="tel"
          value={filterData.phoneNumber}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item sm={3} xs={12}>
        <CustomInput
          placeholder="Order Number"
          name="ordersNumber"
          type="number"
          value={filterData.ordersNumber}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <RadioGroup
          label="Account status"
          name="verified"
          onChange={changeHandler}
          value={filterData.verified}
          radios={VERIFIED_RADIOS}
          row
        />
      </Grid>
      <Grid item sm={5} xs={12}>
        <RadioGroup
          label="User status"
          name="suspend"
          onChange={changeHandler}
          value={filterData.suspend}
          radios={SUSPEND_RADIOS}
          row
        />
      </Grid>
      <Grid
        item
        container
        spacing={3}
        justify="space-evenly"
        alignItems="center"
        xs={12}
        sm={3}
      >
        <CustomButton
          icon={<SearchIcon />}
          onClick={() => onSearchClicked(filterData)}
        >
          Search
        </CustomButton>
        <Tooltip title="Reset filter">
          <IconButton onClick={resetFilter}>
            <RotateLeftIcon color="error" />
          </IconButton>
        </Tooltip>
      </Grid>
      {/* <Grid
        item
        container
        justify={matches ? "center" : "flex-end"}
        alignItems="center"
        sm={4}
        xs={12}
      >
        <CustomButton
          size="small"
          icon={<PersonAddIcon />}
          onClick={handleClickOpenUserDialog}
        >
          اضافة مستخدم
        </CustomButton>
        {openUserDialog && (
          <UserFormDialog
            open={openUserDialog}
            handleClose={handleCloseUserDialog}
          />
        )}
      </Grid> */}
    </Grid>
  );
};

export default UsersFilterControls;
