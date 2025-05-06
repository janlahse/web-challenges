import { add, subtract, multiply, divide } from "./index.js";

function testToBe(message, functionCall, returnValue) {
  test(`${message}`, () => {
    expect(functionCall).toBe(returnValue);
  });
}

//addition

testToBe("returns 5 if called with add(2, 3)", add(2, 3), 5);

test("returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//subtraction

testToBe("returns 10 if called with subtract(15, 5)", subtract(15, 5), 10);

test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(3, 4);
  expect(result).toBeLessThan(0);
});

//multiplication

testToBe("returns 8 if called with multiply(2, 4)", multiply(2, 4), 8);

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-3, 4);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(3, -4);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-3, -4);
  expect(result).toBeGreaterThan(0);
});

//division

testToBe("returns 3 if called with divide(9, 3)", divide(9, 3), 3);

testToBe(
  "returns 'You should not do this!' if called with 0 as second argument",
  divide(-3, 0),
  "You should not do this!"
);
