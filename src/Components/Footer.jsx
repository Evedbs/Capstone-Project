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

const typographyWhite = {
  fontFamily: "karla",
  fontSize: 20,
  color: "white",
};

const sections = [
  {
    title: "Navigation",
    value: [
      { label: "Home", link: "/" },
      { label: "Menu", link: "/menu" },
      { label: "Reservation", link: "/reservation" },
    ],
  },
  {
    title: "Social Media Links",
    value: [
      { label: "Facebook", link: "https://www.facebook.com/" },
      { label: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    title: "Contact",
    value: [
      {
        label: "Little Lemon, 19/20 Royal Hibernian Way, Irlande",
        link: "https://www.google.fr/maps/place/Little+Lemon/@53.341481,-6.2618191,17z/data=!3m1!4b1!4m6!3m5!1s0x48670f886b1dd297:0xf1b04af0735a4553!8m2!3d53.3414778!4d-6.2592442!16s%2Fg%2F11kjh5cxpm!5m1!1e3?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
      },
      { label: "+353 0 000 0000", link: "/about" },
      {
        label: "TheLittleLemon@gmail.com",
        link: "https://www.google.com/intl/fr/gmail/about/",
      },
    ],
  },
];

function FooterSection({ title, value }) {
  return (
    <div className="containerTypoA">
      <Typography
        key={title}
        sx={
          (typographyWhite,
          {
            my: 2,
            color: "#F4CE14",
            display: "block",
            fontSize: 24,
          })
        }
      >
        {title}
      </Typography>
      <div className="containerAFooter">
        {value.map((item) => (
          <a
            target="_blank"
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
