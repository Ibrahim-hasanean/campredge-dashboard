/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  cairoText: {
    fontFamily: "Cairo,sans-serif",
    fontWeight: "700"
  }
}));
export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const classes = useStyle();
  const getMenuItemActive = url => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className={` ${classes.cairoText}`}>الصفحة الرئيسية</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive("/users")}`}
        >
          <NavLink className="menu-link" to="/users">
            <span className={` ${classes.cairoText}`}>المستخدمين</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/specialists"
          )}`}
        >
          <NavLink className="menu-link" to="/specialists">
            <span className={` ${classes.cairoText}`}>الأخصائيين</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-rel ${getMenuItemActive("/orders")}`}
        >
          <NavLink className="menu-link" to="/orders">
            <span className={` ${classes.cairoText}`}>المبيعات</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/packages"
          )}`}
        >
          <NavLink className="menu-link" to="/packages">
            <span className={` ${classes.cairoText}`}>الباقات</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/shipments"
          )}`}
        >
          <NavLink className="menu-link" to="/shipments">
            <span className={` ${classes.cairoText}`}>الشحنات</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/products"
          )}`}
        >
          <NavLink className="menu-link" to="/products">
            <span className={` ${classes.cairoText}`}>المنتجات</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/productstypes"
          )}`}
        >
          <NavLink className="menu-link" to="/productstypes">
            <span className={` ${classes.cairoText}`}>انواع المنتجات</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive("/cities")}`}
        >
          <NavLink className="menu-link" to="/cities">
            <span className={` ${classes.cairoText}`}>المدن</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
