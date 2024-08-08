import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Footer from "./Components/Footer";
import Menu from "./Pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Home />
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
        <div>Order</div>
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navigation />
        <div>Login</div>
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
