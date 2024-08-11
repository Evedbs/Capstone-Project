import { render, screen } from "@testing-library/react";
import Reservation from "../Pages/Reservation";

test("renders learn react link", () => {
  render(<Reservation />);

  const title = screen.getByText("Book Now");

  expect(title).toBeInTheDocument();
});
