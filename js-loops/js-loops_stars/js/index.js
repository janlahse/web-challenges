console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";
  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }

    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(star);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
