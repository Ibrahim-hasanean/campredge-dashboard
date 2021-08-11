import React, { useEffect, useState, useCallback } from "react";
import { getUsers } from "../../../api/Users/index";
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
import UsersRows from "./UsersRows";
const UsersTable = ({ users, setUsers }) => {
  const classes = useStyle();
  // const [users, setUsers] = useState([]);
  // const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const history = useHistory();

  const getData = useCallback(
    async query => {
      let q = query || "";
      let data = await getUsers(q);
      if (!data) {
        return;
      }
      if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
        return history.push("/logout");
      }
      setUsers([...data.data.users]);
      // let count = Math.ceil(data.data.total / 7);
      // setCount(count);
      setPages(data.data.pages);
      console.log(data);
    },
    [history, setUsers]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  const pageChange = async (event, page) => {
    console.log(page);
    setPage(page);
    await getData(`page=${page}`);
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
                رقم جوال المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                نشاط المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                هدف الدايت
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تاريخ الميلاد
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                جنس المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                ايقاف المستخدم
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UsersRows
                users={users}
                setUsers={setUsers}
                key={index}
                user={user}
                index={index}
              />
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
    </>
  );
};

export default UsersTable;
