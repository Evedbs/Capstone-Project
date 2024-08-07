import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardReview({ rating, photo, name, review }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {rating}
        </Typography>
        <Typography
          variant="h5"
          component="div"
        >
          zizi
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
}
