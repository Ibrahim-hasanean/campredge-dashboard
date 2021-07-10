import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SummaryTable from "../SummaryTable";
import { useStyles } from "./style";

const SummaryDetails = ({ homeDetails }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.summaryDetailsContainer}>
      <Grid item sm={6}>
        <Typography variant="h5" gutterBottom>
          Today
        </Typography>
        <Typography variant="h5" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <SummaryTable data={homeDetails.day} />
      </Grid>
      <Grid item sm={6}>
        <Typography variant="h5" gutterBottom>
          This Week
        </Typography>
        <Typography variant="h5" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <SummaryTable data={homeDetails.week} />
      </Grid>
    </Grid>
  );
};

export default SummaryDetails;
