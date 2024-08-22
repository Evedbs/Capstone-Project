import { Typography } from "@mui/material";
import "../Style/ConfirmationReservation.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropTypes from "prop-types";
import ButtonPrimary from "../Components/Buttons";
import { ButtonSecondary } from "../Components/Buttons";

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
          fontSize: 48,
          fontWeight: 100,
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
          <li>{`Name : ${value.firstName} ${value.lastName}`}</li>
          <li>{`Email : ${value.email}`}</li>
          <li>{`Phone number : ${value.phoneNumber}`}</li>
          <li>{`Date : ${value.dateTime}`}</li>
          <li>{`Guest count : ${value.guestCount}`}</li>
        </ul>
      </Typography>
      <div className="containerBtn">
        <ButtonPrimary
          href={"/menu"}
          label={"BROWSE MENU"}
        />
        <ButtonSecondary
          label={"HOME"}
          href={"/"}
        />
      </div>
    </div>
  );
}
