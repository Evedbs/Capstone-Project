import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoYellowGreen from "../assets/logoYellowGreen.png";
import MenuIcon from "@mui/icons-material/Menu";

import "../Style/Navigation.css";

export default function Navigation() {
  return (
    <AppBar
      position="static"
      color="warning"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/"
              id="btnNavBar"
            >
              Home
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/about"
              id="btnNavBar"
            >
              About
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/menu"
              id="btnNavBar"
            >
              Menu
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/reservation"
              id="btnNavBar"
            >
              Reservation
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/order"
              id="btnNavBar"
            >
              Order
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "64px",
                paddingRight: "64px",
              }}
              href="/login"
              id="btnNavBar"
            >
              Login
            </Button>
            <div className="navBarMenu">
              <MenuIcon />
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
