import React, { useCallback, useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import { getPackges as getAllPackges } from "../../../../api/packages/index";
import { API_COMMON_STATUS } from "helpers/api-helper";
import { useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import useStyle from "./style";
import InputLabel from "@material-ui/core/InputLabel";

const OrdersFilter = ({ getData }) => {
  const classes = useStyle();
  const [packages, setPackages] = useState([]);
  const history = useHistory();

  const getPackages = useCallback(
    async query => {
      let q = query || "";
      let packges = await getAllPackges(q);
      if (packges.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
        return history.push("/logout");
      }
      console.log(packges);
      setPackages([...packges.data?.packages]);
    },
    [history]
  );

  const handleChange = e => {
    console.log(e.target.name);
    let query = `packageId=${e.target.value}`;
    getData(query);
  };

  useEffect(() => {
    getPackages();
  }, [getPackages]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">نوع الباكيج</InputLabel>
      <Select onChange={handleChange}>
        {packages.map((pack, index) => (
          <option className={classes.options} key={index} value={pack._id}>
            {pack.name.ar}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default OrdersFilter;
