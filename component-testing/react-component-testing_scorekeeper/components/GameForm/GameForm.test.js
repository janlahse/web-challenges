import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));
const handleCreateGame = jest.fn();

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs).toHaveLength(2);

  const button = screen.getByRole("button", { name: "Create game" });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const form = screen.getByRole("form", { name: "Create a new game" });
  expect(form).toBeInTheDocument();
});

//swapped the last two tests so handleCreateGame has not been called before this test:
test("does not submit form if one input field is left empty", async () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: "Create game" });
  const gameNameInput = screen.getByLabelText("Name of game");
  await user.type(gameNameInput, "Chess");
  await user.click(button);
  expect(handleCreateGame).not.toHaveBeenCalled();
});

test("submits the correct form data when every field is filled out", async () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const user = userEvent.setup();
  const gameNameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const button = screen.getByRole("button", { name: "Create game" });
  await user.type(gameNameInput, "Chess");
  await user.type(playerNamesInput, "Hans Hummus, Zacharias Ziegelstein");
  await user.click(button);
  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Chess",
    playerNames: ["Hans Hummus", "Zacharias Ziegelstein"],
  });
});
