export function getAnimal(animals) {
  return animals === undefined
    ? "I do not like animals at all!"
    : animals === "cats"
    ? `I totally love cats!`
    : `I like ${animals}!`;
}
