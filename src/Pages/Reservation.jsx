import { Button, TextField, Typography } from "@mui/material";
import restaurant from "../assets/restaurant.jpg";
import "../Style/Reservation.css";
import DateTime from "../Components/DateTime.jsx";
import GuestCount from "../Components/GuestCount.jsx";
import ChipList from "../Components/ChipList.jsx";
import { useState } from "react";
import ConfirmationReservation from "./ConfirmationReservation.jsx";

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
              fontSize: 56,
              marginLeft: "20%",
              fontStyle: "italic",
              marginTop: "96px",
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
                value={value.firstName}
                onChange={(e) =>
                  setValue({ ...value, firstName: e.target.value })
                }
              />
              <TextField
                className="input"
                required
                id="outlined-required"
                label="Last name"
                placeholder="Doe"
                value={value.lastName}
                onChange={(e) =>
                  setValue({ ...value, lastName: e.target.value })
                }
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
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
