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
const OrdersTable = () => {
  const classes = useStyle();
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const history = useHistory();

  const getData = useCallback(async () => {
    let data = await getOrders();
    if (!data) {
      return;
    }
    if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      return history.push("/logout");
    }
    setOrders([...data.data.orders]);
    let count = Math.ceil(data.data.total / 7);
    setCount(count);
    console.log(data);
  }, [history]);

  useEffect(() => {
    getData();
  }, [getData]);

  const pageChange = (event, page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <>
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
                اسم الباكيج
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                مدة الباكيج
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
                رقم الاوردر
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
                ايميل المستخدم
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
                حالة الاوردر
              </TableCell>
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
          count={count}
          showFirstButton
          showLastButton
        />
      </TableContainer>
    </>
  );
};

export default OrdersTable;
