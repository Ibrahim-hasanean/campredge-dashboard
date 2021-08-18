import React from "react";
import { Grid } from "@material-ui/core";
import useStyle from "./style";
import VillagesTable from "./VillagesTable";
import VillageHeader from "./VillageHeader";
const Village = ({ city, cities, setCities }) => {
  const classes = useStyle();

  return (
    <Grid className={classes.village} container justify="center">
      <VillageHeader setCities={setCities} cities={cities} city={city} />
      <VillagesTable
        villages={city.villages}
        city={city}
        setCities={setCities}
        cities={cities}
      />
    </Grid>
  );
};

export default Village;
