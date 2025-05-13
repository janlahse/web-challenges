import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const randomPerson = {
    name: chance.name(),
    age: chance.age(),
    profession: chance.profession(),
  };
  response.status(200).json(randomPerson);
}
