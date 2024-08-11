import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoYellowGreen from "../assets/logoYellowGreen.png";
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
            <a href="/">
              <img
                src={logoYellowGreen}
                className="logoYellowGreen"
              />
            </a>
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
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
