import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../Style/CardDish.css";

CardDish.propTypes = {
  imgCard: PropTypes.object,
  title: PropTypes.string,
  bodyCard: PropTypes.string,
  btnCard: PropTypes.string,
};

export default function CardDish({ imgCard, title, bodyCard, btnCard }) {
  return (
    <div className="cardDish">
      <Card
        sx={{ maxWidth: 256, borderRadius: "16px", backgroundColor: "#495E57" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgCard}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#F4CE14", fontFamily: "Markazi-text", fontSize: 32 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontFamily: "karla", fontSize: 20 }}
            variant="body2"
            color="white"
          >
            {bodyCard}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "#F4CE14", fontFamily: "Markazi-text", fontSize: 20 }}
          >
            {btnCard}
            <div className="arrow">
              <ArrowForwardIcon />
            </div>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
