import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import EditIcon from "@material-ui/icons/Edit";
import { Avatar, IconButton } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import EditeProduct from "./EditeProduct";
import Switch from "@material-ui/core/Switch";
import { toggleAcitvateProduct } from "../../../api/Products/index";
import { API_COMMON_STATUS } from "../../../helpers/api-helper";

const ProductRows = ({
  product,
  products,
  setProducts,
  index,
  productsTypes,
  packages
}) => {
  const classes = useStyle();
  const [opentEdite, setOpenEdite] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };
  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  const toggleActivateProduct = async () => {
    let response = await toggleAcitvateProduct(product._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      console.log(response.data.product);
      let oldProductIndex = products.findIndex(x => x._id === product._id);
      let newProducts = products;
      newProducts[oldProductIndex] = {
        ...product,
        isActive: response.data.product.isActive
      };
      setProducts([...newProducts]);
    }
  };

  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.name.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.info.ar}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.info.en}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.type.name?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.type.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <Avatar
            src={product.image}
            className={classes.avatar}
            alt="صورة المنتج"
          />
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={handleOpenEdite}>
            <EditIcon className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton>
            <Switch
              checked={product.isActive}
              onChange={toggleActivateProduct}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </IconButton>
        </TableCell>
      </TableRow>
      <PopUp
        title="تعديل المنتجات"
        maxWidth="lg"
        handleClose={handleCloseEdite}
        open={opentEdite}
      >
        <EditeProduct
          handleClose={handleCloseEdite}
          product={product}
          products={products}
          setProducts={setProducts}
          packages={packages}
          productsTypes={productsTypes}
        />
      </PopUp>
    </>
  );
};

export default ProductRows;
