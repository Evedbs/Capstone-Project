import { Button, Typography } from "@mui/material";
import "../Style/ConfirmationReservation.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropTypes from "prop-types";

ConfirmationReservation.propTypes = {
  value: PropTypes.object,
};

export default function ConfirmationReservation({ value }) {
  return (
    <div className="confirmationReservation">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          color: "#f4ce14",
          fontFamily: "Markazi-text",
          fontSize: 32,
        }}
      >
        Your Reservation Is Confirmed
      </Typography>
      <CheckCircleIcon
        color="success"
        style={{ width: 64 }}
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontFamily: "Markazi-text",
          fontSize: 32,
          color: "#ffffff",
        }}
      >
        Resume
      </Typography>
      <Typography
        sx={{
          fontFamily: "Markazi-text",
          color: "#ffffff",
        }}
      >
        <ul>
          <li>{`Name: ${value.firstName} ${value.lastName}`}</li>
          <li>{`Email: ${value.email}`}</li>
          <li>{`Phone number: ${value.phoneNumber}`}</li>
          <li>{`Date: ${value.dateTime}`}</li>
          <li>{`Guest count: ${value.guestCount}`}</li>
        </ul>
      </Typography>
      <div className="containerBtn">
        <Button
          variant="contained"
          href="/menu"
          color="primary"
          sx={{ fontFamily: "karla", fontSize: 20 }}
        >
          Browse Menu
        </Button>
        <Button
          variant="contained"
          href="/"
          color="secondary"
          sx={{ fontFamily: "karla", fontSize: 20 }}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
