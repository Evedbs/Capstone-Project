import Typography from "@mui/material/Typography";
import logoYellowGreen from "../assets/logoYellowGreen.png";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonNavigation } from "./Buttons";
import ResponsiveNavigation from "./ResponsiveNavigation";
import { useLocation } from "react-router-dom";

import "../Style/Navigation.css";
import { useState } from "react";

export default function Navigation() {
  const [showResponsiveNavigation, setShowResponsiveNavigation] =
    useState(false);

  const pathName = window.location.pathname;

  return (
    <>
      {showResponsiveNavigation ? (
        <ResponsiveNavigation
          showResponsiveNavigation={showResponsiveNavigation}
          setShowResponsiveNavigation={setShowResponsiveNavigation}
        />
      ) : (
        <div className={pathName === "/contact" ? "navBarPrimary" : "navBar"}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          ></Typography>
          <div className="containerButtons">
            <a href="/">
              <img
                src={logoYellowGreen}
                className="logoYellowGreen"
              />
            </a>
            <ButtonNavigation
              label={"HOME"}
              href="/"
            />
            <ButtonNavigation
              label={"ABOUT"}
              href="/about"
            />
            <ButtonNavigation
              label={"MENU"}
              href="/menu"
            />
            <ButtonNavigation
              label={"RESERVATION"}
              href="/reservation"
            />
            <ButtonNavigation
              label={"ORDER"}
              href="/order"
            />
            <ButtonNavigation
              label={"CONTACT"}
              href="/contact"
            />
          </div>
          <div className="navBarMenuResponsive">
            <a href="/">
              <img
                src={logoYellowGreen}
                className="logoYellowGreen"
              />
            </a>
            <div
              className="menuIcon"
              onClick={() => setShowResponsiveNavigation(true)}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
