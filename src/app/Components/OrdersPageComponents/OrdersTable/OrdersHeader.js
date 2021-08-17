import React from "react";
import { Grid, Typography } from "@material-ui/core";
import OrdersFilter from "./OrdersFilter";
import useStyle from "./style";
const OrdersHeader = ({ getData }) => {
  const classes = useStyle();
  // const [openAdd, setOpenAdd] = useState(false);

  // const handleClose = () => {
  //   setOpenAdd(false);
  // };
  return (
    <Grid
      className={classes.header}
      container
      justify="flex-start"
      alignItems="flex-end"
    >
      <Grid container item xs={12} justify="center">
        <Typography className={classes.headerItems} variant="h4">
          المبيعات
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="flex-start" alignItems="flex-end">
        <OrdersFilter className={classes.headerItems} getData={getData} />
        {/* <Grid container justify="flex-end" item xs={2}>
          {/* <Button
            onClick={() => setOpenAdd(true)}
            variant="contained"
            color="primary"
          >
            اضافة طلب
          </Button> 
        </Grid> */}
      </Grid>
      {/* <PopUp
        maxWidth="lg"
        title="اضافة طلب جديد"
        open={openAdd}
        handleClose={handleClose}
      >
        <AddOrder />
      </PopUp> */}
    </Grid>
  );
};

export default OrdersHeader;
