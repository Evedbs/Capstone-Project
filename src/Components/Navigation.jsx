import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoYellowGreen from "../assets/logoYellowGreen.png";
import MenuIcon from "@mui/icons-material/Menu";

import "../Style/Navigation.css";
import { useState } from "react";

const buttonStyle = {
  my: 2,
  color: "black",
  display: "block",
  fontWeight: "bold",
  fontSize: 16,
  paddingLeft: "64px",
  paddingRight: "64px",
};

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navBar">
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
        }}
      >
        <div className="containerLogo">
          <a href="/">
            <img
              src={logoYellowGreen}
              className="logoYellowGreen"
            />
          </a>
        </div>
      </Typography>
      <div className="containerButtons">
        <Button
          sx={buttonStyle}
          href="/"
          id="btnNavBar"
        >
          Home
        </Button>
        <Button
          sx={buttonStyle}
          href="/about"
          id="btnNavBar"
        >
          About
        </Button>
        <Button
          sx={buttonStyle}
          href="/menu"
          id="btnNavBar"
        >
          Menu
        </Button>
        <Button
          sx={buttonStyle}
          href="/reservation"
          id="btnNavBar"
        >
          Reservation
        </Button>
        <Button
          sx={buttonStyle}
          href="/order"
          id="btnNavBar"
        >
          Order
        </Button>
        <Button
          sx={buttonStyle}
          href="/contact"
          id="btnNavBar"
        >
          Contact
        </Button>
      </div>
      <div className="navBarMenuResponsive">
        {menu === true ? (
          <div className="showMenuResponsive"></div>
        ) : (
          <div className="navBarMenuResponsive">
            <MenuIcon onClick={setMenu(true)} />
          </div>
        )}
      </div>
    </div>
  );
}
