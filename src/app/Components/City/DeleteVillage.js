import React from "react";
import { Button, Grid } from "@material-ui/core";
import { deleteVillage } from "../../../api/Village/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import useStyle from "./style";
const DeleteVillage = ({
  village,
  villages,
  city,
  cities,
  setCities,
  handleClose
}) => {
  const classes = useStyle();
  const deleteVill = async () => {
    try {
      let response = await deleteVillage(village._id);
      console.log(response);
      if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
        let newVillages = villages.filter(x => x._id !== village._id);
        let newCities = cities;
        let updatedCity = city;
        updatedCity.villages = newVillages;
        let oldCityIndex = newCities.findIndex(x => x._id === updatedCity._id);
        newCities[oldCityIndex] = updatedCity;
        setCities([...newCities]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid className={classes.deleteContainer} container justify="space-between">
      <Button onClick={deleteVill} variant="contained" color="secondary">
        حذف
      </Button>
      <Button onClick={() => handleClose()} variant="contained" color="default">
        الغاء
      </Button>
    </Grid>
  );
};

export default DeleteVillage;
