import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";
export function ScrollTop() {
  return (
    <div id="kt_scrolltop" className="scrolltop">
      <span className="svg-icon">
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
      </span>{" "}
    </div>
  );
}
