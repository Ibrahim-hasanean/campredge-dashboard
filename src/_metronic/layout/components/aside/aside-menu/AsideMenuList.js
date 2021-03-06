/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import useStyle from "../../style";
export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const classes = useStyle();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className={`menu-text ${classes.cairoText} `}>
              الصفحة الرئيسية
            </span>
          </NavLink>
        </li>

        {/* <li className="menu-section ">
          <h4 className="menu-text">المستخدمين</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li> */}

        <li
          className={`menu-item ${getMenuItemActive("/users", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/users">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>المستخدمين</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/specialists", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/specialists">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>الأخصائيين</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/orders", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/orders">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>المبيعات</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/packages", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/packages">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>الباقات</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/shipments", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/shipments">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>الشحنات</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/products", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/products">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>المنتجات</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/cities", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/cities">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className={`menu-text ${classes.cairoText}`}>المدن</span>
          </NavLink>
        </li>
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
