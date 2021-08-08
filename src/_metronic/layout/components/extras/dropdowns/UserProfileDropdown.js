/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import { GlobalContext } from "contexts/GlobalState";
import { Grid } from "@material-ui/core";

export function UserProfileDropdown() {
  const [{ admin }] = React.useContext(GlobalContext);
  console.log(admin);
  return (
    // <Dropdown drop="down" alignRight>
    //   <Dropdown.Toggle
    //     as={DropdownTopbarItemToggler}
    //     id="dropdown-toggle-user-profile"
    //   >
    <Grid container item alignItems="center">
      <div>
        <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
          مرحبا,
        </span>
        <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-1">
          {admin.name}
        </span>

        {/* <span className="symbol symbol-35 symbol-light-success">
            <span className="symbol-label font-size-h5 font-weight-bold">
              {admin.name}
            </span>
          </span> */}
      </div>
      <div>
        <div>
          <Link to="/logout" className="btn btn-light-primary font-weight-bold">
            Sign Out
          </Link>
        </div>
      </div>
    </Grid>
    // </Dropdown.Toggle>
    /* <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <div
          className="d-flex align-items-center flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
          style={{
            backgroundImage: `url(${toAbsoluteUrl("/media/misc/bg-1.jpg")})`
          }}
        >
          <div className="symbol bg-white-o-15 mr-3">
            <span className="symbol-label text-success font-weight-bold font-size-h4">
              {admin.name}
            </span>
          </div>
          <div className="text-white m-0  mr-3 font-size-h5">{admin.name}</div>
        </div>
        <div className="navi navi-spacer-x-0 pt-5">
          <div className="navi-footer  px-8 py-5">
            <Link
              to="/logout"
              className="btn btn-light-primary font-weight-bold"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </Dropdown.Menu>  */
    // </Dropdown>
  );
}
