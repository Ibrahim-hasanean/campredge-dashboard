import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { getHomeSummary } from "api/HomeSummary";
import { API_COMMON_STATUS } from "helpers/api-helper";
import SummarySection from "_metronic/layout/components/SummarySection";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import BarChart from "app/Components/HomePageComponents/BarChart/BarChart";
import SpecializeTable from "app/Components/HomePageComponents/SpecializeTable/SpecializeTable";
import MaleFemaleChart from "app/Components/HomePageComponents/MaleFemaleChart/MaleFemaleChart";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles(() => ({
  sections: {
    margin: "0 0 50px 0"
  }
}));

const DashboardPage = () => {
  const classes = useStyle();
  const history = useHistory();
  const [homeDetails, setHomeDetails] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    getHomeSummary(token)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          console.log(response);
          setHomeDetails(response);
        } else if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
          // show no auth message response.message
          setHasError(true);
          history.push("/logout");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [history]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setHasError(null);
  };

  return (
    <Grid container direction="column">
      <Grid className={classes.sections} container item justify="center">
        <SummarySection homeDetails={homeDetails} />
      </Grid>
      {homeDetails.data && (
        <Grid
          className={classes.sections}
          container
          item
          justify="space-around"
          xs={12}
        >
          <SpecializeTable specialist={homeDetails.data.specialistsChart} />
        </Grid>
      )}

      {homeDetails.data && (
        <Grid
          className={classes.sections}
          alignItems="flex-end"
          container
          item
          justify="space-between"
        >
          <Grid container item justify="space-around" xs={7}>
            <BarChart data={homeDetails.data.packagesChart} />
          </Grid>

          <Grid container item xs={4} justify="center">
            <MaleFemaleChart data={homeDetails.data.genderChart} />
          </Grid>
        </Grid>
      )}

      <Snackbar
        open={!!hasError}
        handleClose={handleClose}
        type="error"
        text="Something went wrong please try again"
      />
    </Grid>
  );
};

export default DashboardPage;
