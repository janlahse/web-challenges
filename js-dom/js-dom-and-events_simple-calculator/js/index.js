console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector("[data-js=add]");
const subButton = document.querySelector("[data-js=subtract]");
const mulButton = document.querySelector("[data-js=multiply]");
const divButton = document.querySelector("[data-js=divide]");
const expButton = document.querySelector("[data-js=exponent]");
const modButton = document.querySelector("[data-js=modulo]");
const incOneButton = document.querySelector("[data-js=increase-by-one]");
const incFiveButton = document.querySelector("[data-js=increase-by-five]");
const decOneButton = document.querySelector("[data-js=decrease-by-one]");
const decFiveButton = document.querySelector("[data-js=decrease-by-five]");
const multTwoButton = document.querySelector("[data-js=multiply-by-two]");
const divTwoButton = document.querySelector("[data-js=divide-by-two]");
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const sum = operand1 + operand2;
  console.log(sum);
});
subButton.addEventListener("click", () => {
  const dif = operand1 - operand2;
  console.log(dif);
});
mulButton.addEventListener("click", () => {
  const prod = operand1 * operand2;
  console.log(prod);
});
divButton.addEventListener("click", () => {
  const quo = operand1 / operand2;
  console.log(quo);
});
expButton.addEventListener("click", () => {
  const pot = Math.pow(operand1, operand2);
  console.log(pot);
});
modButton.addEventListener("click", () => {
  const mod = operand1 % operand2;
  console.log(mod);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
