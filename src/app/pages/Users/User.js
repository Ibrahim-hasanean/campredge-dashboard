import React, { useState, useCallback, useEffect } from "react";
import { Grid } from "@material-ui/core";
import UsersHeader from "app/Components/Users/UsersHeader";
import UsersTable from "app/Components/Users/UsersTable";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../../api/Users/index";
import { API_COMMON_STATUS } from "helpers/api-helper";

const User = () => {
  const [users, setUsers] = useState([]);
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

  return (
    <Grid container>
      <UsersHeader getData={getData} users={users} setUsers={setUsers} />
      <Grid>
        <UsersTable
          page={page}
          setPage={setPage}
          pages={pages}
          setPages={setPages}
          getData={getData}
          users={users}
          setUsers={setUsers}
        />
      </Grid>
    </Grid>
  );
};

export default User;
