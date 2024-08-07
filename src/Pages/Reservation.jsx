import { Button, TextField } from "@mui/material";
import restaurant from "../assets/restaurant.jpg";
import "../Style/Reservation.css";
import DateTime from "../Components/DateTime.jsx";
import GuestCount from "../Components/GuestCount.jsx";
import Chips from "../Components/Chips.jsx";

export default function Reservation() {
  return (
    <div className="ReservationPage">
      <img
        src={restaurant}
        className="imgReservation"
      />
      <h1 className="h1Reservation">Book Now</h1>
      <div className="containerInputs">
        <TextField
          className="input"
          required
          id="outlined-required"
          label="Required"
          placeholder="Hello World"
        />
        <TextField
          className="input"
          required
          id="outlined-required"
          label="Required"
          placeholder="Hello World"
        />
        <TextField
          className="input"
          required
          id="outlined-required"
          label="Required"
          placeholder="Hello World"
        />
        <TextField
          className="input"
          required
          id="outlined-required"
          label="Required"
          placeholder="Hello World"
        />
        <div className="dateTime">
          <DateTime />
        </div>
        <div className="guestCount">
          <GuestCount />
        </div>
        <div className="containerChips">
          <div className="chip">
            <Chips
              title="Occasion"
              label1="None"
              label2="Engagement"
              label3="Anniversary"
              label4="Birthday"
            />
          </div>
          <div className="chip">
            <Chips
              title="Occasion"
              label1="None"
              label2="Engagement"
              label3="Anniversary"
              label4="Birthday"
            />
          </div>
        </div>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}
