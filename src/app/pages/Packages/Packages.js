import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import PackgesHeader from "app/Components/Packages/PackgesHeader";
import { getPackges } from "../../../api/packages/index";
import PackagesTable from "app/Components/Packages/PackagesTable";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const getData = async () => {
    let response = await getPackges();
    console.log(response);
    setPackages(response.data.packages);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container>
      <PackgesHeader packages={packages} setPackages={setPackages} />
      <PackagesTable packages={packages} />
    </Grid>
  );
};

export default Packages;
