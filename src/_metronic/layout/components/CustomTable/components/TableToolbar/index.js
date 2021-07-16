import React from "react";
import { Toolbar, Typography, IconButton, Tooltip } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./style";
import CountUpdater from "_metronic/layout/components/CountUpdater";
import UpdateIcon from "@material-ui/icons/Update";
import NotificationModal from "_metronic/layout/components/NotificationModal";

const TableToolbar = props => {
  const classes = useStyles();
  const { selected, updateTableData, usersTable } = props;
  const numSelected = selected.length;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="h6">
          {numSelected} {usersTable ? "Selected Users" : "طلب محدد"}
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h5">
          {usersTable ? "Users" : "الطلبات"}
        </Typography>
      )}

      {numSelected > 0 && <NotificationModal selectedUsersIds={selected} />}
      {usersTable && (
        <Tooltip title="Update users data">
          <IconButton color="primary" onClick={updateTableData}>
            <UpdateIcon />
          </IconButton>
        </Tooltip>
      )}
      {!usersTable && (
        <CountUpdater startNumber={60} onCounterFinished={updateTableData} />
      )}
    </Toolbar>
  );
};

export default TableToolbar;
