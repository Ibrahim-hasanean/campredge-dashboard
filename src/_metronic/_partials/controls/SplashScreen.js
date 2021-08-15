import React from "react";
import { CircularProgress } from "@material-ui/core";
import logo from "../../_assets/images/campredge.png";
export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img src={logo} alt="cabredge logo" />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
