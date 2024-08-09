import { Button, TextField, Typography } from "@mui/material";
import restaurant from "../assets/restaurant.jpg";
import "../Style/Reservation.css";
import DateTime from "../Components/DateTime.jsx";
import GuestCount from "../Components/GuestCount.jsx";
import ChipList from "../Components/ChipList.jsx";

export default function Reservation() {
  return (
    <div className="ReservationPage">
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
          fontSize: 32,
        }}
      >
        Book Now
      </Typography>
      <form>
        <div className="containerInputs">
          <TextField
            className="input"
            required
            id="outlined-required"
            label="First name"
            placeholder="John"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Last name"
            placeholder="Doe"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Email"
            placeholder="JohnDoe@gmail.com"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Phone number"
            placeholder="06 00 00 00 00"
          />
          <div className="dateTime">
            <DateTime />
          </div>
          <div className="guestCount">
            <GuestCount />
          </div>
          <div className="containerChips">
            <div className="chip">
              <ChipList
                title="Occasion"
                value={["None", "Engagement", "Anniversary"]}
              />
            </div>
            <div className="chip">
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
              marginTop: "96px",
              marginBottom: "128px",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
