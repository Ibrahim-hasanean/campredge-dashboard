import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomCard from "_metronic/layout/components/CustomCard";
import Avatar from "_metronic/layout/components/Avatar";
import CustomList from "_metronic/layout/components/CustomList";
import {
  getUserFullName,
  getFirstCharactersOfUserName,
  getUserInfoList
} from "helpers/generalHelpers";
import { useStyles } from "./style";

const UserInfo = ({ userData }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <CustomCard className={classes.userCardContainer}>
        <Grid container direction="column" wrap="nowrap" alignItems="center">
          <Avatar
            alt={getUserFullName(userData)}
            src={userData?.profileImageURL}
            size="large"
          >
            {getFirstCharactersOfUserName(userData)}
          </Avatar>
          <Typography variant="subtitle1">
            {getUserFullName(userData)}
          </Typography>
        </Grid>
        <CustomList items={getUserInfoList(userData)} dense />
      </CustomCard>
    </Grid>
  );
};

export default UserInfo;
