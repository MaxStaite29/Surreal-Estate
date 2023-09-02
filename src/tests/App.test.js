import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders surreal estate", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
