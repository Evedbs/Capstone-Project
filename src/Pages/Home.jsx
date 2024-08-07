import "../Style/Home.css";
import { Button } from "@mui/material";
import restaurantFood from "../assets/restaurantFood.jpg";
import CardDish from "../Components/CardDish.jsx";
import CardReview from "../Components/CardReview.jsx";
import bruschetta from "../assets/bruschetta.jpg";

export default function Home() {
  return (
    <div className="app">
      <div className="heroSection">
        <div className="heroContent">
          <h1 className="h1Hero">Little Lemon</h1>
          <h3 className="h3Hero">Chicago</h3>
          <p className="pHero">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="btnCTA">
            <Button variant="contained">Reserve A Table</Button>
          </div>
        </div>
        <div className="heroImg">
          <img
            src={restaurantFood}
            className="heroImg"
          />
        </div>
      </div>
      <div className="highlightsSection">
        <div className="highlightsTitleBtn">
          <h1 className="h1Specials">Specials</h1>
          <div className="btnOrderOnline">
            <Button variant="contained">Order Online</Button>
          </div>
        </div>
        <div className="containerCard">
          <CardDish
            imgCard={bruschetta}
            title="Bruschetta"
            bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            btnCard="Order a Delivery"
          />
          <CardDish
            imgCard={bruschetta}
            title="Bruschetta"
            bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            btnCard="Order a Delivery"
          />
          <CardDish
            imgCard={bruschetta}
            title="Bruschetta"
            bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            btnCard="Order a Delivery"
          />
        </div>
      </div>
      <hr />
      <div className="testimonialsSection">
        <h1 className="h1Testimonials">Testimonials</h1>
        <div className="containerCardReview">
          <div>
            <CardReview
              rating="great"
              review="AWESOME"
            />
          </div>
          <div>
            <CardReview
              rating="great"
              review="AWESOME"
            />
          </div>
          <div>
            <CardReview
              rating="great"
              review="AWESOME"
            />
          </div>
          <div>
            <CardReview
              rating="great"
              review="AWESOME"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="aboutSection">
        <div className="h1h3Body">
          <h1 className="h1About">Little Lemon</h1>
          <h3 className="h3About">Chicago</h3>
          <p className="pBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
