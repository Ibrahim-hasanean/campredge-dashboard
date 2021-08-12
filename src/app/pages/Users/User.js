import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import UsersHeader from "app/Components/Users/UsersHeader";
import UsersTable from "app/Components/Users/UsersTable";

const User = () => {
  const [users, setUsers] = useState([]);
  return (
    <Grid container>
      <UsersHeader users={users} setUsers={setUsers} />
      <Grid>
        <UsersTable users={users} setUsers={setUsers} />
      </Grid>
    </Grid>
  );
};

export default User;
