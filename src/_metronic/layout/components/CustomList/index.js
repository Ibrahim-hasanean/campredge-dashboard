import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

const CustomList = ({ items, dense = false, ...rest }) => {
  return (
    <List dense={dense} {...rest}>
      {items.map(item => {
        return (
          <ListItem button key={item.id}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {item.avatar && (
              <ListItemAvatar>
                <Avatar>{item.avatar}</Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomList;
