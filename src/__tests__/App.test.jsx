import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

test("Renders a component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Vite \+ React/i);
  expect(linkElement).toBeInTheDocument();
});

test("Increment Count on Button Click", () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 1/i);

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 2/i);
});
