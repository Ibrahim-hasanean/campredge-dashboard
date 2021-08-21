import React, { useState, useCallback, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ShipmentHeader from "app/Components/Shipment/ShipmentHeader";
import { getShipments } from "../../../api/Shipment/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useHistory } from "react-router-dom";
import ShipmentsTable from "app/Components/Shipment/ShipmentsTable";

const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const history = useHistory();

  const getData = useCallback(async () => {
    let data = await getShipments();
    if (!data) {
      return;
    }
    if (data.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
      return history.push("/logout");
    }
    setShipments([...data.data.shipments]);
    setPages(data.data.pages);
  }, [history]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Grid container>
      <ShipmentHeader setShipments={setShipments} shipments={shipments} />
      <ShipmentsTable
        setShipments={setShipments}
        shipments={shipments}
        page={page}
        getData={getData}
        pages={pages}
        setPage={setPage}
      />
    </Grid>
  );
};

export default Shipments;
