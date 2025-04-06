console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

// - This function should calculate and return the percentage of the page that the user has scrolled.
// - Use the following properties:
//   - `window.scrollY`: The Y position of the window on the total webpage.
//   - `window.innerHeight`: The height of the visible part of the window.
//   - `document.body.clientHeight`: The total height of the webpage.

function calculateScrollPercentage() {
  const progress =
    window.scrollY / (document.body.clientHeight - window.innerHeight);
  return progress;
}
