import React from "react";
import { Link } from "react-router-dom";
// import objectPath from "object-path";
// import { useHtmlClassService } from "../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../_helpers";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useSyle = makeStyles(() => ({
  icon: {
    color: "#3699ff"
  }
}));
export function Brand() {
  // const uiService = useHtmlClassService();
  const classes = useSyle();
  // const layoutProps = useMemo(() => {
  //   return {
  //     brandClasses: uiService.getClasses("brand", true),
  //     asideSelfMinimizeToggle: objectPath.get(
  //       uiService.config,
  //       "aside.self.minimize.toggle"
  //     ),
  //     headerLogo: uiService.getLogo(),
  //     headerStickyLogo: uiService.getStickyLogo()
  //   };
  // }, [uiService]);

  return (
    <>
      {/* begin::Brand */}
      <div className="brand flex-column-auto" id="kt_brand">
        {/* begin::Logo */}
        <Link to="/" className="brand-logo">
          <img
            alt="logo"
            width="20%"
            src={toAbsoluteUrl("/media/logos/logo.png")}
          />
        </Link>
        {/* end::Logo */}
        {/* begin::Toggle */}
        <IconButton
          className="brand-toggle btn btn-sm px-0"
          id="kt_aside_toggle"
        >
          <span className="svg-icon svg-icon-xl">
            {/* <SVG src={ArrowNext} /> */}
            <ArrowForwardIosIcon className={classes.icon} fontSize="large" />
          </span>
        </IconButton>
      </div>
      {/* end::Brand */}
    </>
  );
}
