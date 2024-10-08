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
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
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
              bodyCard="Traditional Mediterranean dish that features a mix of fresh vegetables and simple, yet flavorful ingredients."
              btnCard="Order a Delivery"
            />
          </article>
          <article className="cardDish">
            <CardDish
              imgCard={bruschetta}
              title="Bruschetta"
              bodyCard="Typically served as an appetizer, bruschetta is an Italian dish consisting of grilled or toasted bread with fresh ingredients."
              btnCard="Order a Delivery"
            />
          </article>
          <article className="cardDish">
            <CardDish
              imgCard={lemonDessert}
              title="Lemon Dessert"
              bodyCard="A classic creamy dessert, a flaky pastry crust filled with a smooth, tangy lemon curd. It's topped with a dusting of powdered sugar."
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
              review={`"The Greek salad is delicious! I will recommend this restaurant to my friends!"`}
            />
          </article>
          <article>
            <CardReview
              rating={5}
              photo={woman}
              name="Nicole"
              review={`"Very well located restaurant with a great atmosphere, I will return with great pleasure!"`}
            />
          </article>
          <article>
            <CardReview
              rating={3}
              photo={man1}
              name="Nicolas"
              review={`“Friendly restaurant and the service is irreproachable, small flat on the lemon pie that I find slightly too sweet.”`}
            />
          </article>
          <article>
            <CardReview
              rating={4}
              photo={woman1}
              name="Sarah-Nicolette"
              review={`“Amazing! My loved ones loved it! the setting is great, the waiters are very friendly and the dishes are delicious! You must try the Greek salad.”`}
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
            {`Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Dublin, and were inspired to bring
            the flavors of their hometown in Italy to the people of Dublin. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.`}
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
