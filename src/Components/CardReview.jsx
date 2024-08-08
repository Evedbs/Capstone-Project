import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Style/CardReview.css";
import BasicRating from "./Rating";

export default function CardReview({ rating, photo, name, review }) {
  return (
    <div className="cardReview">
      <div className="imgName">
        <img
          src={photo}
          className="imgCardReview"
        />
        <div className="nameReview">{name}</div>
      </div>
      <div className="stares">
        <BasicRating number={rating} />
      </div>
      <p className="reviewBody">{review}</p>
    </div>
  );
}
