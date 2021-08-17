import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { getSpecialists } from "../../../api/Specialists/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useHistory } from "react-router-dom";
import SpecialistsHeader from "app/Components/Specialists/SpecialistsHeader";
import SpecialistsTable from "app/Components/Specialists/SpecialistsTable";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const history = useHistory();
  const getData = useCallback(
    async query => {
      let q = query || "";
      let data = await getSpecialists(q);
      if (!data) {
        return;
      }
      if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
        return history.push("/logout");
      }
      setSpecialists([...data.data.specialists]);
      setPages(data.data.pages);
      console.log(data);
    },
    [history, setSpecialists]
  );

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Grid container>
      <SpecialistsHeader />
      <SpecialistsTable
        specialists={specialists}
        setPage={setPage}
        setSpecialists={setSpecialists}
        page={page}
        pages={pages}
        getData={getData}
      />
    </Grid>
  );
};

export default Specialists;
