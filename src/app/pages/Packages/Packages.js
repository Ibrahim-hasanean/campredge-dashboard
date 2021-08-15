import React, { useEffect, useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import PackgesHeader from "app/Components/Packages/PackgesHeader";
import { getPackges } from "../../../api/packages/index";
import PackagesTable from "app/Components/Packages/PackagesTable";
import { useHistory } from "react-router-dom";
import { API_COMMON_STATUS } from "helpers/api-helper";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const history = useHistory();
  const getData = useCallback(async () => {
    let response = await getPackges();
    console.log(response);
    if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      return history.push("/logout");
    }
    setPackages(response.data.packages);
  }, [history]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Grid container>
      <PackgesHeader packages={packages} setPackages={setPackages} />
      <PackagesTable packages={packages} setPackages={setPackages} />
    </Grid>
  );
};

export default Packages;
