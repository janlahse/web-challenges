console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

hideTosError();
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  if (!elements.tos.checked) {
    showTosError();
    return;
  }
  alert("Form submitted");
  showSuccess();
});

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
