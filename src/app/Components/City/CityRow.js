import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import DeleteCity from "./DeleteCity";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import EditeCity from "./EditeCity";
import Village from "./Village";
const CityRow = ({ index, city, cities, setCities }) => {
  const classes = useStyle();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdite, setOpenEdite] = useState(false);
  const [openVillage, setOpenVillage] = useState(false);

  const handleOpenEdite = () => {
    setOpenEdite(true);
  };
  const handleCloseEdite = () => {
    setOpenEdite(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenVillage = () => {
    setOpenVillage(true);
  };
  const handleCloseVillage = () => {
    setOpenVillage(false);
  };

  const villages = city.villages.map(x => x.name.ar);
  return (
    <TableRow>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {city.name.ar}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {city.name.en}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {villages.length > 0 ? villages.join(" ,") : "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenVillage}>
          <LocationCityIcon className={classes.vilage} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenEdite}>
          <EditIcon className={classes.editeIcon} />
        </IconButton>
      </TableCell>

      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenDelete}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
      <PopUp
        open={openDelete}
        handleClose={handleCloseDelete}
        title={`هل تريد بالتاكيد حذف مدينة "${city.name.ar}"`}
      >
        <DeleteCity
          handleClose={handleCloseDelete}
          city={city}
          cities={cities}
          setCities={setCities}
        />
      </PopUp>
      <PopUp
        open={openEdite}
        handleClose={handleCloseEdite}
        title={`تعديل المدينة`}
      >
        <EditeCity
          handleClose={handleCloseEdite}
          city={city}
          cities={cities}
          setCities={setCities}
        />
      </PopUp>
      <PopUp
        open={openVillage}
        handleClose={handleCloseVillage}
        title={`الأحياء الخاصة بمدينة ${city.name.ar}`}
        maxWidth="lg"
      >
        <Village
          handleClose={handleCloseVillage}
          city={city}
          cities={cities}
          setCities={setCities}
        />
      </PopUp>
    </TableRow>
  );
};

export default CityRow;
