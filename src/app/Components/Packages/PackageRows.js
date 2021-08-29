import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PopUp from "../PopUp/PopUp";
import EditePackage from "./EditePackage";
import Switch from "@material-ui/core/Switch";
import { activeToggle } from "../../../api/packages/index";
import { API_COMMON_STATUS } from "helpers/api-helper";

const PackageRows = ({ pack, index, packages, setPackages }) => {
  const classes = useStyle();
  const [openEdite, setOpenEdite] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };
  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  const toggleActivateUser = async () => {
    let response = await activeToggle(pack._id);
    if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
      console.log(response.data.package);
      let oldPackIndex = packages.findIndex(x => x._id === pack._id);
      let newPackages = packages;
      newPackages[oldPackIndex] = {
        ...pack,
        isActive: response.data.package.isActive
      };
      setPackages([...newPackages]);
    }
  };

  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.name?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.description?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.description?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.isActive ? "مفعلة" : "غير مفعلة"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.quantity || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.price || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.discountPrice || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {pack.mostDuration || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton onClick={() => handleOpenEdite()}>
            <EditIcon fontSize="inherit" className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton>
            <Switch
              checked={pack.isActive}
              onChange={toggleActivateUser}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </IconButton>
        </TableCell>
      </TableRow>
      <PopUp
        open={openEdite}
        handleClose={handleCloseEdite}
        title="تعديل الباقة"
        maxWidth="lg"
      >
        <EditePackage
          pack={pack}
          packages={packages}
          setPackages={setPackages}
          handleClose={handleCloseEdite}
        />
      </PopUp>
    </>
  );
};

export default PackageRows;
