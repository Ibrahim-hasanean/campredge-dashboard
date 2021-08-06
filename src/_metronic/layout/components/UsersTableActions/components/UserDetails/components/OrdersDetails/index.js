import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomList from "_metronic/layout/components/CustomList";
import CustomAccordion from "_metronic/layout/components/CustomAccordion";
import { getUserOrdersList } from "helpers/generalHelpers";
import { formatDate } from "helpers/dateHelpers";

import { useStyles } from "./style";

const OrdersDetails = ({ orders }) => {
  const classes = useStyles();

  let content = null;

  if (orders?.length) {
    content = (
      <>
        <Typography variant="h6" gutterBottom>
          User Orders
        </Typography>
        {orders.map((order, index) => (
          <CustomAccordion
            key={order._id}
            title={`Order ${index + 1} - ${formatDate(order.createdAt)}`}
          >
            <CustomList items={getUserOrdersList(order)} dense />
          </CustomAccordion>
        ))}
      </>
    );
  } else {
    content = (
      <Typography variant="h5" align="center">
        This user has no Orders so far.
      </Typography>
    );
  }

  return (
    <Grid item xs={12} sm={8} className={classes.detailsContainer}>
      {content}
    </Grid>
  );
};

export default OrdersDetails;
