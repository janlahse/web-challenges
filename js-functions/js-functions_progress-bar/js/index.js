console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage() * 100 + "%";
});

const calculateScrollPercentage = () =>
  window.scrollY / (document.body.clientHeight - window.innerHeight);
