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
});

test("calls callback on every user input", async () => {});
