import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);

  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);

  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("size select has initial value of small", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");

  expect(sizeSelect).toHaveValue("small");
});

test("size select changes value when user selects a different option", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");

  userEvent.selectOptions(sizeSelect, "large");

  expect(sizeSelect).toHaveValue("large");
});

// "Your Selection" text
test("displays selected size in Your Selection section", () => {
  render(<App />);

  expect(screen.getByText("Size: small")).toBeInTheDocument();
});

test("displays selected toppings in Your Selection section", () => {
  render(<App />);

  expect(screen.getByText("Toppings: None")).toBeInTheDocument();
});

test("updates Your Selection when pepperoni is checked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);

  expect(screen.getByText("Toppings: Pepperoni")).toBeInTheDocument();
});

test("updates Your Selection when size is changed", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");
  userEvent.selectOptions(sizeSelect, "medium");

  expect(screen.getByText("Size: medium")).toBeInTheDocument();
});

// "Contact Info" text box
test("contact info input is initially empty", () => {
  render(<App />);

  const contactInput = screen.getByRole("textbox");

  expect(contactInput).toHaveValue("");
});

test("contact info input updates when user types", () => {
  render(<App />);

  const contactInput = screen.getByRole("textbox");

  userEvent.type(contactInput, "John Doe");

  expect(contactInput).toHaveValue("John Doe");
});

// Submit Order button
test("submit order button exists", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit order/i });

  expect(submitButton).toBeInTheDocument();
});

test("submit order button is clickable", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit order/i });

  expect(submitButton).toBeEnabled();
});
