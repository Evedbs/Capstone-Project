import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoYellowGreen from "../assets/logoYellowGreen.png";
import "../Style/Navigation.css";
// import { useState } from "react";

export default function Navigation() {
  // const [page, setPage] = useState(null);

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
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <img
              src={logoYellowGreen}
              className="logoYellowGreen"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/"
            >
              Home
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/about"
            >
              About
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/menu"
            >
              Menu
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/reservation"
            >
              Reservation
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/order"
            >
              Order
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              href="/login"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
