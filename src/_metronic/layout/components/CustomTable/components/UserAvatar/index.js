import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "_metronic/layout/components/Avatar";

const UserAvatar = ({ user }) => {
  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Avatar src={user.profileImageURL}>{`${(user.firstName &&
        user.firstName[0]) ||
        "😥"}`}</Avatar>
      <Typography style={{ margin: 5 }} variant="caption">
        {user.firstName || "No name 😥"} {user.secondName || "No name 😥"}
      </Typography>
    </Grid>
  );
};

export default UserAvatar;
