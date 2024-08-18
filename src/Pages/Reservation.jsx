import { Button, TextField, Typography } from "@mui/material";
import restaurant from "../assets/restaurant.jpg";
import "../Style/Reservation.css";
import DateTime from "../Components/DateTime.jsx";
import GuestCount from "../Components/GuestCount.jsx";
import ChipList from "../Components/ChipList.jsx";
import { useState } from "react";
import ConfirmationReservation from "./ConfirmationReservation.jsx";
import PropTypes from "prop-types";
import useWindowSize from "../helpers/useWindowSize.jsx";

BookingForm.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.string,
  handleSubmit: PropTypes.string,
};

function BookingForm({ value, setValue, handleSubmit }) {
  const { windowSize } = useWindowSize();

  return (
    <section className="ReservationPage">
      <img
        src={restaurant}
        className="imgReservation"
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          color: "#495e57",
          fontFamily: "Markazi-text",
          fontSize: 56,
          marginLeft: "20%",
          fontStyle: "italic",
          marginTop: "96px",
        }}
      >
        Book Now
      </Typography>
      <div>{windowSize}</div>
      <form>
        <div className="containerInputs">
          <TextField
            className="input"
            required
            id="outlined-required"
            label="First name"
            placeholder="John"
            value={value.firstName}
            onChange={(e) => setValue({ ...value, firstName: e.target.value })}
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Last name"
            placeholder="Doe"
            value={value.lastName}
            onChange={(e) => setValue({ ...value, lastName: e.target.value })}
          />
          <TextField
            className="input"
            required
            type="email"
            id="outlined-required"
            label="Email"
            placeholder="JohnDoe@gmail.com"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Phone number"
            placeholder="06 00 00 00 00"
            value={value.phoneNumber}
            onChange={(e) =>
              setValue({ ...value, phoneNumber: e.target.value })
            }
          />
          <div className="dateTime">
            <DateTime
              value={value}
              setValue={setValue}
            />
          </div>
          <div className="guestCount">
            <GuestCount
              value={value}
              setValue={setValue}
            />
          </div>
          <div className="containerChips">
            <div className="chip">
              <ChipList
                title="Occasion"
                value={["None", "Engagement", "Anniversary"]}
              />
            </div>
            <div
              className="chip"
              style={{ marginTop: 32 }}
            >
              <ChipList
                title="Seating preferences"
                value={["No preferences", "Indoor", "Outdoor", "Veranda"]}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontFamily: "karla",
              fontSize: 20,
              marginTop: "32px",
              marginBottom: "96px",
            }}
            onClick={handleSubmit}
            size="large"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

export default function Reservation() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateTime: "",
    guestCount: "",
  });

  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {
    const array = [1, 45, 5, 34, 23, 5, 82, 12, 35, 21, 8, 9];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] % 6);
    }
    if (
      value.firstName === "" ||
      value.lastName === "" ||
      value.email === "" ||
      value.phoneNumber === "" ||
      value.dateTime === "" ||
      value.guestCount === ""
    ) {
      alert("All fields must be completed");
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      {toggle ? (
        <ConfirmationReservation value={value} />
      ) : (
        <BookingForm
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
