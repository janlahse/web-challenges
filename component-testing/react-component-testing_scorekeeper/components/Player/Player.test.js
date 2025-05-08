import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Hans Hummus" />);

  const playerInfo = screen.getByText("Hans Hummus");
  expect(playerInfo).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      name="Hans Hummus"
      score="3"
      onIncreasePlayerScore={handleIncrease}
      onDecreasePlayerScore={handleDecrease}
    />
  );

  const increaseButton = screen.getByRole("button", { name: "Increase Score" });
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });

  await user.click(increaseButton);
  await user.click(increaseButton);
  await user.click(decreaseButton);

  expect(handleIncrease).toHaveBeenCalledTimes(2);
  expect(handleDecrease).toHaveBeenCalledTimes(1);
});
