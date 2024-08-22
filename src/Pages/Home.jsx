import "../Style/Home.css";
import { Typography } from "@mui/material";
import restaurantFood from "../assets/restaurantFood.jpg";
import CardDish from "../Components/CardDish.jsx";
import CardReview from "../Components/CardReview.jsx";
import bruschetta from "../assets/bruschetta.jpg";
import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert(2).jpg";
import man from "../assets/manRandom.jpg";
import man1 from "../assets/manRandom1.jpg";
import woman from "../assets/womanRandom.jpg";
import woman1 from "../assets/womanRandom1.jpg";
import cook from "../assets/cook.jpg";
import cook1 from "../assets/cook1.jpg";
import ButtonPrimary from "../Components/Buttons.jsx";
import { ButtonSecondary } from "../Components/Buttons.jsx";

const titleSecondary = {
  color: "#f4ce14",
  fontFamily: "Markazi-text",
  fontSize: 56,
  fontStyle: "italic",
};

const titlePrimary = {
  color: "#495e57",
  fontFamily: "Markazi-text",
  fontSize: 56,
  marginLeft: "20%",
  fontStyle: "italic",
};

const typographyBlack = {
  fontFamily: "karla",
  fontSize: 20,
};

export default function Home() {
  return (
    <div className="home">
      <section className="heroSection">
        <div className="heroContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={titleSecondary}
          >
            Little Lemon
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
          >
            Chicago
          </Typography>
          <p className="pHero">
            <Typography sx={typographyBlack}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </p>
          <div className="buttonCTABook">
            <ButtonSecondary
              label={"RESERVE A TABLE"}
              href={"/reservation"}
            />
          </div>
        </div>
        <img
          src={restaurantFood}
          className="heroImg"
        />
      </section>
      <section className="highlightsSection">
        <div className="highlightsTitleButton">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={titlePrimary}
          >
            Specials
          </Typography>
          <div className="buttonCTAOrderOnline">
            <ButtonPrimary
              label={"ORDER ONLINE"}
              href={"/order"}
            />
          </div>
        </div>
        <div className="containerCard">
          <article className="cardDish">
            <CardDish
              imgCard={greekSalad}
              title="Greek Salad"
              bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btnCard="Order a Delivery"
            />
          </article>
          <article className="cardDish">
            <CardDish
              imgCard={bruschetta}
              title="Bruschetta"
              bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btnCard="Order a Delivery"
            />
          </article>
          <article className="cardDish">
            <CardDish
              imgCard={lemonDessert}
              title="Lemon Dessert"
              bodyCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btnCard="Order a Delivery"
            />
          </article>
        </div>
      </section>
      <hr className="hrHome" />
      <section className="testimonialsSection">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={titlePrimary}
        >
          Testimonials
        </Typography>
        <div className="containerCardReview">
          <article>
            <CardReview
              rating={4}
              photo={man}
              name="Greg"
              review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
            />
          </article>
          <article>
            <CardReview
              rating={5}
              photo={woman}
              name="Nicole"
              review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
            />
          </article>
          <article>
            <CardReview
              rating={3}
              photo={man1}
              name="Nicolas"
              review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
            />
          </article>
          <article>
            <CardReview
              rating={4}
              photo={woman1}
              name="Sarah-Nicolette"
              review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
            />
          </article>
        </div>
      </section>
      <hr className="hrHome" />
      <section className="aboutSection">
        <div className="aboutContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary"
            sx={{
              fontFamily: "Markazi-text",
              fontSize: 56,
              fontStyle: "italic",
            }}
          >
            Little Lemon
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Markazi-text",
              fontSize: 32,
            }}
            color="black"
          >
            Chicago
          </Typography>
          <Typography sx={typographyBlack}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <div className="containerImgAbout">
          <img
            src={cook}
            className="imgCook"
            alt="image of a cook"
          />
          <img
            src={cook1}
            className="imgCook1"
            alt="image of a cook"
          />
        </div>
      </section>
    </div>
  );
}
