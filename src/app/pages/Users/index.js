import React, { useEffect, useState, useRef } from "react";
import { Box } from "@material-ui/core";
import UsersFilterControls from "_metronic/layout/components/UsersFilterControls";
import CustomTable from "_metronic/layout/components/CustomTable";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import { getUsers } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";

const Users = () => {
  const [usersData, setUsersData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState("");
  const [startFromZero, setStartFromZero] = useState(true);
  const prevDataOffset = useRef(0);

  useEffect(() => {
    updateTableData(query);
  }, [query]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setHasError(null);
  };

  const updateTableData = query => {
    if (query.indexOf("offset") === -1) {
      setStartFromZero(prevState => !prevState);
    }
    setUsersData(null);
    getUsers(query)
      .then(response => {
        console.log("test users data in users page component", response);
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          if (prevDataOffset.current) {
            setUsersData(prevUsersData => [
              ...prevUsersData,
              ...response.users
            ]);
            prevDataOffset.current += response.users.length;
          } else {
            setUsersData(response.users);
          }
        } else {
          setHasError(true);
          setUsersData([]);
        }
      })
      .catch(error => {
        setUsersData([]);
        setHasError(true);
        console.log(error);
        console.error(error);
      });
  };

  const updateOrdersQuery = filterData => {
    const {
      firstName,
      secondName,
      phoneNumber,
      ordersNumber,
      verified,
      suspend
    } = filterData;
    console.log(filterData);
    let filterQuery = "skip=20";

    if (firstName) {
      filterQuery = `firstName=${firstName}`;
    }

    if (secondName) {
      filterQuery = filterQuery
        ? `${filterQuery}&secondName=${secondName}`
        : `secondName=${secondName}`;
    }

    if (phoneNumber) {
      filterQuery = filterQuery
        ? `${filterQuery}&phoneNumber=${phoneNumber}`
        : `phoneNumber=${phoneNumber}`;
    }

    if (ordersNumber) {
      filterQuery = filterQuery
        ? `${filterQuery}&ordersNumber=${ordersNumber}`
        : `ordersNumber=${ordersNumber}`;
    }

    if (verified) {
      filterQuery = filterQuery
        ? `${filterQuery}&verified=${verified === "verified" ? true : false}`
        : `verified=${verified === "verified" ? true : false}`;
    }

    if (suspend) {
      filterQuery = filterQuery
        ? `${filterQuery}&suspend=${suspend === "suspended" ? true : false}`
        : `suspend=${suspend === "suspended" ? true : false}`;
    }

    console.log("test users data", filterData, filterQuery);
    setQuery(filterQuery);
  };

  const resetFilterOrdersData = () => {
    setQuery("");
  };

  return (
    <Box height="100%" bgcolor="#fff" padding="5px">
      <UsersFilterControls
        onSearchClicked={updateOrdersQuery}
        onResetClicked={resetFilterOrdersData}
      />
      <CustomTable
        data={usersData}
        updateTableData={() => updateTableData(query)}
        usersTable
        startFromFirstPage={startFromZero}
        updateQuery={setQuery}
        ref={prevDataOffset}
      />
      <Snackbar
        open={!!hasError}
        handleClose={handleClose}
        type="error"
        text="Something went wrong please try again"
      />
    </Box>
  );
};

export default Users;
