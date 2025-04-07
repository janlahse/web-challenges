console.clear();

const box = document.querySelector("[data-js=box]");
const colorInput = document.querySelector("[data-js=input-color]");
const radiusInput = document.querySelector("[data-js=input-radius]");
const rotationInput = document.querySelector("[data-js=input-rotation]");

colorInput.addEventListener("input", () => {
  box.style.background = `hsl(${colorInput.value}, 70%, 60%)`;
});

radiusInput.addEventListener("input", () => {
  box.style.borderRadius = `${radiusInput.value}%`;
});

rotationInput.addEventListener("input", () => {
  box.style.transform = `rotate(${rotationInput.value}deg)`;
});
