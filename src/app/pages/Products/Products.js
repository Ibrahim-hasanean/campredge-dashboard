import React, { useState, useCallback, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductHeader from "app/Components/Products/ProductHeader";
import ProductTable from "app/Components/Products/ProductTable";
import { getProduct, getProductsTypes } from "../../../api/Products/index";
import { getPackges } from "../../../api/packages/index";
import { API_COMMON_STATUS } from "../../../helpers/api-helper";
import { useHistory } from "react-router-dom";
const Products = () => {
  const [packages, setPackages] = useState([]);
  const [productsTypes, setProductsTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  const history = useHistory();
  const getProductData = useCallback(async () => {
    let response = await getProduct();
    if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      history.push("/logout");
    }
    setProducts([...response.data.products]);
    setPages(response.data.pages);
  }, [history]);

  const getProductTypesData = useCallback(async () => {
    let response = await getProductsTypes();
    if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      history.push("/logout");
    }
    setProductsTypes([...response.data.productTypes]);
  }, [history]);

  const getgetPackgesData = useCallback(async () => {
    let response = await getPackges();
    if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      history.push("/logout");
    }
    setPackages([...response.data.packages]);
  }, [history]);

  useEffect(() => {
    getProductData();
    getProductTypesData();
    getgetPackgesData();
  }, [getProductData, getgetPackgesData, getProductTypesData]);

  return (
    <Grid container justify="center">
      <ProductHeader
        productsTypes={productsTypes}
        products={products}
        setProducts={setProducts}
        packages={packages}
      />
      <ProductTable
        page={page}
        pages={pages}
        setPage={setPage}
        setPages={setPages}
        getData={getProductData}
        setProducts={setProducts}
        products={products}
      />
    </Grid>
  );
};

export default Products;
