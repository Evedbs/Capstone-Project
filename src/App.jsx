import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Footer from "./Components/Footer";
import ConfirmationReservation from "./Pages/ConfirmationReservation";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Reservation />
      <ConfirmationReservation />
      <Footer />
    </>
  );
}

export default App;
