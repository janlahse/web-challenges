/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

//export const getNameAndCountry = ({ name, country }) => [name, country];
export function getNameAndCountry({ name, country }) {
  return [name, country];
}

export function getRelocatedCity( //gets two city objects
  city1,
  //city2 = { name: "Berlin", country: "Germany" }
  //sets default for varaible
  city2
) {
  if (city2 == undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  //const [, country] = getNameAndCountry(city2);
  //turns object into array, declares country varaible as city2.country
  const country = city2.country;
  return {
    //  ...city1,
    //spreads the city1 object
    name: city1.name,
    country: city1.country,
    country,
  };
}
