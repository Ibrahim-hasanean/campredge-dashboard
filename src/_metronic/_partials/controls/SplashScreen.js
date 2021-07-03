import React from "react";
import { CircularProgress } from "@material-ui/core";
import { toAbsoluteUrl } from "../../_helpers";

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img src={toAbsoluteUrl("/media/logos/logo.png")} alt="Taxi logo" />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
