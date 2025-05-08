import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Chess"
      name="nameOfGame"
      value="Name"
      onChange={handleChange}
      required
    />
  );

  const textInput = screen.getByLabelText("Name of game");
  expect(textInput).toBeInTheDocument();
  expect(textInput).toHaveAttribute("placeholder", "e.g. Chess");
  expect(textInput).toHaveAttribute("name", "nameOfGame");
  expect(textInput).toHaveAttribute("value", "Name");
  expect(textInput).toBeRequired();

  const inputLabel = screen.getByText("Name of game");
  expect(inputLabel).toBeInTheDocument();
  expect(inputLabel).toHaveAttribute("for", "nameOfGame");
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Chess"
      name="nameOfGame"
      value="Name"
      onChange={handleChange}
      required
    />
  );

  const textInput = screen.getByLabelText("Name of game");
  await user.type(textInput, "Hello");
  expect(handleChange).toHaveBeenCalledTimes(5);
});
