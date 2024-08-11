import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../Style/Footer.css";
import logo from "../assets/logoWhite.png";

const pages = [
  { title: "Navigation" },
  { title: "Contact" },
  { title: "Social Media Links" },
];

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
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <div className="map">
                {pages.map((page) => (
                  <>
                    <Typography
                      key={page.title}
                      sx={{
                        my: 2,
                        color: "#F4CE14",
                        display: "block",
                        fontSize: 32,
                      }}
                    >
                      {page.title}
                    </Typography>
                  </>
                ))}
              </div>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
