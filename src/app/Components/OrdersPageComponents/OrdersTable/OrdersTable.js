import React, { useEffect, useState, useCallback } from "react";
import { getOrders } from "../../../../api/Orders/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import useStyle from "./style";
import OrdersRow from "./OrdersRow";
import { Grid } from "@material-ui/core";
import RTLProvider from "app/Components/RTLProvider";
import OrdersHeader from "./OrdersHeader";

const OrdersTable = () => {
  const classes = useStyle();
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const history = useHistory();

  const getData = useCallback(
    async query => {
      let q = query || "";
      let data = await getOrders(q);
      if (!data) {
        return;
      }
      if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
        return history.push("/logout");
      }
      setOrders([...data.data.orders]);
      // let count = Math.ceil(data.data.total / 7);
      // setCount(count);
      setPages(data.data.pages);
      console.log(data);
    },
    [history]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  const pageChange = (event, page) => {
    console.log(page);
    setPage(page);
    getData(`page=${page}`);
  };

  return (
    <RTLProvider>
      <OrdersHeader getData={getData} orders={orders} setOrders={setOrders} />
      <Grid container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                >
                  #
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  رقم الطلب
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  اسم الباقة
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  مدة الباقة
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  نوع الدفع
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  اسم المستخدم
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  جوال المستخدم
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  تاريخ الطلب
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  حالة الطلب
                </TableCell>
                {/* <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  الغاء الطلب
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <OrdersRow key={index} order={order} index={index} />
              ))}
            </TableBody>
          </Table>
          <Pagination
            onChange={pageChange}
            page={page}
            count={pages}
            showFirstButton
            showLastButton
          />
        </TableContainer>
      </Grid>
    </RTLProvider>
  );
};

export default OrdersTable;
