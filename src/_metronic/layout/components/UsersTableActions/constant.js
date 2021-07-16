import React from "react";
import BlockIcon from "@material-ui/icons/Block";
import DetailsIcon from "@material-ui/icons/Details";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const getUserMenuOptions = options => {
  const userMenuOptions = [
    {
      label: "User details",
      icon: <DetailsIcon color="primary" />
    },
    {
      label: "Add to wallet",
      icon: <AddCircleIcon color="primary" />
    },
    {
      label: "Suspend user",
      icon: <BlockIcon color="secondary" />
    },
    {
      label: "Delete user",
      icon: <DeleteIcon color="secondary" />
    }
  ];

  if (options.isSuspended) {
    userMenuOptions.splice(2, 1, {
      label: "UnSuspend user",
      icon: <CheckCircleIcon color="primary" />
    });
  }

  return userMenuOptions;
};
