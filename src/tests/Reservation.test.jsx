import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Reservation from "../Pages/Reservation";

test("renders learn react link", async () => {
  render(<Reservation />);

  const title = screen.getByText("Book Now");

  expect(title).toBeInTheDocument();
});
