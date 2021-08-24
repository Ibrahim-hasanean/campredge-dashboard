import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import PopUp from "../PopUp/PopUp";
import AddProduct from "./AddProduct";

const ProductHeader = ({ products, setProducts, productsTypes, packages }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.header} container>
      <Grid container justify="center">
        <Typography variant="h4"> صفحة المنتجات </Typography>
      </Grid>
      <Grid container justify="space-between">
        <Grid container item xs={10}></Grid>
        <Grid container item xs={2} justify="flex-end">
          <Button onClick={handleOpen} variant="contained" color="primary">
            اضافة منتجات
          </Button>
        </Grid>
      </Grid>
      <PopUp
        handleClose={handleClose}
        title="اضافة منتج جديد"
        open={open}
        maxWidth="lg"
      >
        <AddProduct
          handleClose={handleClose}
          packages={packages}
          products={products}
          productsTypes={productsTypes}
          setProducts={setProducts}
        />
      </PopUp>
    </Grid>
  );
};

export default ProductHeader;
