import React from "react";
import { Grid } from "@material-ui/core";
import OrdersTable from "app/Components/OrdersPageComponents/OrdersTable/OrdersTable";

const Orders = () => {
  return (
    <Grid container>
      <OrdersTable />
    </Grid>
  );
};

export default Orders;
