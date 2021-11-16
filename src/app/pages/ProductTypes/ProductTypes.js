import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  table: {
    width: "70%",
    margin: "auto"
  },
  image: {
    width: "90px",
    height: "60px"
  },

  inputs: {
    // background: "white",
    margin: "0px 10px",
    fontWeight: "700",
    color: "black"
  },
  tableCell: {
    padding: "0px"
  }
});
const ProductTypes = () => {
  const classes = useStyles();
  const [productTypes, setProductTypes] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({ arName: "", enName: "" });

  const getProductsTypes = () => {
    axios
      .get("/product_types", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response);
        setProductTypes(response.data?.data?.productTypes);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProductsTypes();
  }, []);

  const addProductType = async () => {
    console.log(data);
    if (!data.arName || !data.image) {
      setError(" نوع المنتج و الصورة مطلوبان");
    } else {
      let formData = new FormData();
      let names = { ar: data.arName, en: data.enName };
      formData.append("productType", JSON.stringify(names));
      formData.append("image", data.image);
      axios
        .post("/admin/product_type", formData, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log(response);
          setData({ arName: "", enName: "" });
          getProductsTypes();
          setSuccess(true);
          setError(false);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <Grid style={{ padding: "20px 0px" }} container justify="center">
      <Grid
        container
        justify="center"
        style={{ paddingBottom: "40px" }}
        xs={12}
      >
        <TextField
          value={data.arName}
          onChange={e => setData({ ...data, arName: e.target.value })}
          className={classes.inputs}
          placeholder=" نوع  المنتج "
        />
        <TextField
          className={classes.inputs}
          onChange={e => {
            setData({ ...data, image: e.target.files[0] });
          }}
          placeholder="صورة المنتج"
          type="file"
        />
        <Button onClick={addProductType} variant="primary">
          اضافة
        </Button>
      </Grid>
      <Grid xs={6}>
        {error && (
          <Alert className={classes.alert} variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        {success && (
          <Alert
            className={classes.alert}
            variant="outlined"
            severity="success"
          >
            تمت اضافة نوع المنتج بنجاح
          </Alert>
        )}
      </Grid>
      <Grid xs={12} justify="center">
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <h4 style={{ fontWeight: "bold" }}>نوع المنتج</h4>
                </TableCell>
                <TableCell align="center">
                  <h4 style={{ fontWeight: "bold" }}>صورة المنتج</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productTypes.map(type => (
                <TableRow>
                  <TableCell
                    className={classes.tableCell}
                    align="center"
                    key={type.name}
                  >
                    <p
                      style={{
                        color: "black",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    >
                      {type.name}
                    </p>
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    align="center"
                    key={type.image}
                  >
                    <img
                      className={classes.image}
                      src={type.image}
                      alt="product type"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ProductTypes;
