console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const data = await fetch(url);
  const output = await data.json();
  console.log(output);
  console.log(output.results[0]);
  console.log(output.results[2].eye_color);
}

fetchData();
