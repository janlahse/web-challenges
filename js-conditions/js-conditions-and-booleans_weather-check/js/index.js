// Change this value to test different "weather" conditions.
const weather = "snowy";
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 0;
let warmth;
if (temperature > 20) {
  warmth = "warm";
} else if (temperature > 0) {
  warmth = "middle";
} else {
  warmth = "cold";
}

switch (weather + warmth) {
  case "sunnywarm":
    console.log("It's sunny!");
    break;
  case "sunnymiddle":
    console.log("It's sunny but not too warm!");
    break;
  case "sunnycold":
    console.log("It's sunny but very cold, take care!");
    break;
  case "rainywarm":
    console.log("It's rainy but also warm. ");
    break;
  case "rainymiddle":
    console.log("It's rainy, don't forget your umbrella!");
    break;
  case "rainycold":
    console.log("It's rainy and also very cold. Prepare yourself!");
    break;
  case "snowywarm":
    console.log("It's snowy and very warm outside...");
    break;
  case "snowymiddle":
    console.log("It's snowy but not too cold. ");
    break;
  case "snowycold":
    console.log("It's snowy, stay warm!");
    break;
  default:
    console.log("I don't know what the weather is like ");
    break;
}
