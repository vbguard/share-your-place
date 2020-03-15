import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import "./MainNavigation.css";

function MainNavigation(props) {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handlerOpenCloseMenu = e => {
    e.preventDefault();
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <>
      {toggleDrawer && <Backdrop onClick={handlerOpenCloseMenu} />}

      <SideDrawer show={toggleDrawer} onClick={handlerOpenCloseMenu}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={handlerOpenCloseMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Share Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
