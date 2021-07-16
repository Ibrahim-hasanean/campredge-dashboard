import React from "react";
import { Menu, MenuItem, ListItemText, ListItemIcon } from "@material-ui/core";

const CustomMenu = ({
  options,
  button: Button,
  buttonContent,
  itemClickHandler
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>{buttonContent}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map(option => (
          <MenuItem
            key={option.label}
            onClick={() => {
              itemClickHandler(option.label);
              handleClose();
            }}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
