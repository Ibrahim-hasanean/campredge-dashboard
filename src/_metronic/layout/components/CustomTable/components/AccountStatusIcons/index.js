import React from "react";
import { Tooltip, Grid } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BlockIcon from "@material-ui/icons/Block";

const AccountStatusIcons = ({ suspended, verified }) => {
  return (
    <Grid container justify="space-evenly" alignItems="center">
      <Tooltip title={verified ? "Verified" : "Not Verified"}>
        <VerifiedUserIcon
          style={verified ? { color: "green" } : { color: "red" }}
        />
      </Tooltip>
      {suspended && (
        <Tooltip title="Suspended">
          <BlockIcon style={{ color: "red" }} />
        </Tooltip>
      )}
    </Grid>
  );
};

export default AccountStatusIcons;
