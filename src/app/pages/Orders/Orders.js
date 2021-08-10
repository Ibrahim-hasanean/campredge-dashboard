import { Typography } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import OrdersTable from "app/Components/OrdersPageComponents/OrdersTable/OrdersTable";

const Orders = () => {
  return (
    <Grid container>
      <Grid container>
        <Typography variant="h4">المبيعات</Typography>
      </Grid>
      <Grid container justify="flex-end">
        <OrdersTable />
      </Grid>
    </Grid>
  );
};

export default Orders;
