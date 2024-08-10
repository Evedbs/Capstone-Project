import { Typography } from "@mui/material";
import "../Style/CardReview.css";
import BasicRating from "./Rating";
import PropTypes from "prop-types";

CardReview.propTypes = {
  rating: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  review: PropTypes.string,
};

export default function CardReview({ rating, photo, name, review }) {
  return (
    <div className="cardReview">
      <div className="imgName">
        <img
          src={photo}
          className="imgCardReview"
        />
        <Typography
          sx={{
            fontFamily: "Markazi-text",
            fontSize: 20,
            alignSelf: "center",
            marginLeft: "16px",
          }}
        >
          {name}
        </Typography>
      </div>
      <div className="stares">
        <BasicRating number={rating} />
      </div>
      <Typography
        sx={{
          fontFamily: "karla",
          fontSize: 16,
          fontStyle: "italic",
          margin: "16px",
        }}
      >
        {review}
      </Typography>
    </div>
  );
}
