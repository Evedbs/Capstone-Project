import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

CardDish.propTypes = {
  imgCard: PropTypes.object,
  title: PropTypes.string,
  bodyCard: PropTypes.string,
  btnCard: PropTypes.string,
};

export default function CardDish({ imgCard, title, bodyCard, btnCard }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {bodyCard}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{btnCard}</Button>
      </CardActions>
    </Card>
  );
}
