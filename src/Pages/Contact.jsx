import { Typography } from "@mui/material";
import "../Style/Contact.css";

const titlePrimary = {
  color: "#495e57",
  fontFamily: "Markazi-text",
  fontSize: 56,
  marginLeft: "10%",
  fontStyle: "italic",
  marginTop: "-80px",
};

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactOverlappingContent">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.099168747154!2d-6.2618191229506595!3d53.34148097508715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f886b1dd297%3A0xf1b04af0735a4553!2sLittle%20Lemon!5e0!3m2!1sfr!2sfr!4v1723891409148!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="containerTitleForm">
          <Typography sx={titlePrimary}>How Can We Help You ?</Typography>
          <div className="formContact"></div>
        </div>
      </div>
    </div>
  );
}
