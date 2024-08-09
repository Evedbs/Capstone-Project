import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "../Style/Footer.css";
import logo from "../assets/logoWhite.png";

const pages = ["Navigation", "Contact", "Social Media Links"];

export default function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="containerLogoTypography">
            <img
              src={logo}
              className="imgLogo"
            />
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
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "#F4CE14", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
