import React, { useEffect, useState, useCallback } from "react";
import { API_COMMON_STATUS } from "helpers/api-helper";

import { Grid } from "@material-ui/core";
import CitiesHeader from "app/Components/City/CitiesHeader";
import { getCities } from "../../../api/Cities/index";
import { useHistory } from "react-router-dom";
import CitiesTable from "app/Components/City/CitiesTable";
const City = () => {
  const [cities, setCities] = useState([]);
  const history = useHistory();

  const getData = useCallback(async () => {
    let data = await getCities();
    if (!data) {
      return;
    }
    if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      return history.push("/logout");
    }
    setCities([...data.data.cities]);
  }, [history]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Grid container>
      <CitiesHeader cities={cities} setCities={setCities} />
      <CitiesTable cities={cities} setCities={setCities} />
    </Grid>
  );
};

export default City;
