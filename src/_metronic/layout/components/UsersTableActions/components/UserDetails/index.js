import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import UserInfo from "./components/UserInfo";
import UserLoading from "./components/UserLoading";
import OrdersDetails from "./components/OrdersDetails";
import { getUserByID } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";

const UserDetails = ({ userId }) => {
  const [userData, setUsersData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getUserByID(userId)
      .then(response => {
        console.log("test user action", response, response.user);
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setUsersData(response.user);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [userId]);

  let content = loading ? (
    <UserLoading />
  ) : (
    <Grid container spacing={2}>
      <UserInfo userData={userData} />
      <OrdersDetails orders={userData.orders} />
    </Grid>
  );

  if (error) {
    content = (
      <Typography align="center" variant="h5">
        Oops Something went wrong
      </Typography>
    );
  }
  return <Box minHeight="350px">{content}</Box>;
};

export default UserDetails;
