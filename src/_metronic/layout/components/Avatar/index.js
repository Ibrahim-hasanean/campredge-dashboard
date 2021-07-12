import React from "react";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./style";

const CustomAvatar = ({ src, alt, size = "small", children, className }) => {
  const classes = useStyles();
  let sizeClass = "";
  if (size === "large") {
    sizeClass = classes.large;
  } else if (size === "small") {
    sizeClass = classes.small;
  }
  return (
    <Avatar src={src} alt={alt} className={`${sizeClass} ${className}`}>
      {children}
    </Avatar>
  );
};

export default CustomAvatar;
