import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress
} from "@material-ui/core";

import { useStyles, StyledTableRow, StyledTableCell } from "./style";

const SummaryTable = ({ data }) => {
  const classes = useStyles();

  const rows = useMemo(
    () => [
      {
        title: "Total Orders",
        value: data?.ordersNO
      },
      {
        title: "Total Cost",
        value: data?.totalCost
      },
      {
        title: "Total Wallet",
        value: data?.totalWallet
      }
    ],
    [data]
  );

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.title} hover>
              <StyledTableCell
                style={{ borderRight: "1px solid #ccc" }}
                component="th"
                scope="row"
              >
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderCardValue(row.value)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
