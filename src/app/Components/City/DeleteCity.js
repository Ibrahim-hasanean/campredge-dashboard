import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyle from "./style";
import { deleteUser } from "../../../api/Cities/index";
import { API_COMMON_STATUS } from "helpers/api-helper";

const DeleteCity = ({ city, setCities, cities, handleClose }) => {
  const classes = useStyle();
  const deleteCity = async () => {
    let response = await deleteUser(city._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      let newCities = cities.filter(x => x._id !== city._id);
      setCities([...newCities]);
      handleClose();
    }
  };
  return (
    <Grid className={classes.deleteContainer} container justify="space-between">
      <Button onClick={deleteCity} variant="contained" color="secondary">
        حذف المدينة
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeleteCity;
