import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../Style/Footer.css";
import logo from "../assets/logoWhite.png";
import PropTypes from "prop-types";

FooterSection.propTypes = {
  title: PropTypes.string,
  value: PropTypes.array,
};

const sections = [
  {
    title: "Navigation",
    value: [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Menu", link: "/menu" },
      { label: "Reservation", link: "/reservation" },
      { label: "Order Online", link: "/order" },
      { label: "Login", link: "/login" },
    ],
  },
  {
    title: "Contact",
    value: [
      { label: "Address", link: "/about" },
      { label: "Phone number", link: "/about" },
      { label: "Email", link: "/about" },
    ],
  },
  {
    title: "Social Media Links",
    value: [
      { label: "Facebook", link: "/about" },
      { label: "Linkedin", link: "/about" },
      { label: "Instagram", link: "/about" },
    ],
  },
];

function FooterSection({ title, value }) {
  return (
    <div className="containerTypoA">
      <Typography
        key={title}
        sx={{
          my: 2,
          color: "#F4CE14",
          display: "block",
          fontSize: 24,
        }}
      >
        {title}
      </Typography>
      <div className="containerAFooter">
        {value.map((item) => (
          <a
            key={item.label}
            className="a"
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="containerFooter">
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
                  {sections.map((section) => (
                    <FooterSection
                      key={section.title}
                      title={section.title}
                      value={section.value}
                    />
                  ))}
                </div>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
