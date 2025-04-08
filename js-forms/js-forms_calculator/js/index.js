console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const numA = Number(data.numberA);
  const numB = Number(data.numberB);

  switch (data.operator) {
    case "addition":
      result = add(numA, numB);
      break;
    case "subtraction":
      result = subtract(numA, numB);
      break;
    case "multiplication":
      result = multiply(numA, numB);
      break;
    case "division":
      result = divide(numA, numB);
      break;
    default:
      result = "Please choose an operator. ";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
