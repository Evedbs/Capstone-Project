import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Footer from "./Components/Footer";
import Menu from "./Pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <div className="app">
          <Home />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navigation />
        <div>About</div>
        <Footer />
      </>
    ),
  },
  {
    path: "/menu",
    element: (
      <>
        <Navigation />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: "/reservation",
    element: (
      <>
        <Navigation />
        <Reservation />
        <Footer />
      </>
    ),
  },
  {
    path: "/order",
    element: (
      <>
        <Navigation />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navigation />
        <div className="app">
          <Contact />
        </div>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
