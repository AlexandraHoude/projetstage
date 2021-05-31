/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Tableau de bord</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/liste-stagiaires", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/liste-stagiaires">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Stagiaires</span>
          </NavLink>
        </li>
        <li
            className={`menu-item ${getMenuItemActive("/tableau-de-bord-groupe", false)}`}
            aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/tableau-de-bord-groupe">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Tableau de bord de groupe</span>
          </NavLink>
        </li>
        <li
            className={`menu-item ${getMenuItemActive("/tableau-de-bord-groupe", false)}`}
            aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/liste-taches-etudiant">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Liste des tâches</span>
          </NavLink>
        </li>
        <li
            className={`menu-item ${getMenuItemActive("/tache/details", false)}`}
            aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/tache/details">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Tâches</span>
          </NavLink>
        </li>

        <li
            className={`menu-item ${getMenuItemActive("/tuteurs", false)}`}
            aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/tuteurs">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Tuteurs</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
