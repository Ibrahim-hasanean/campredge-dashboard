import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyle from "./style";
import { activeToggle } from "../../../api/packages/index";
import { API_COMMON_STATUS } from "helpers/api-helper";

const DeletePackage = ({ pack, packages, setPackages, handleClose }) => {
  const classes = useStyle();
  const toggleActivateUser = async () => {
    let response = await activeToggle(pack._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      console.log(response.data.package);
      let oldPackIndex = packages.findIndex(x => x._id === pack._id);
      let newPackages = packages;
      newPackages[oldPackIndex] = {
        ...pack,
        isActive: response.data.package.isActive
      };
      setPackages([...newPackages]);
      handleClose();
    }
  };
  return (
    <Grid className={classes.delete} container justify="space-around">
      <Button
        variant="contained"
        color={pack.isActive ? "secondary" : "primary"}
        onClick={() => toggleActivateUser()}
      >
        {pack.isActive ? "ايقاف" : "تنشيط"}
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeletePackage;
