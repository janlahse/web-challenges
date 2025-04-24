import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 0,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 2,
      name: "🍉 Watermelon",
      color: "red",
    },
    {
      id: 3,
      name: "🍆 Eggplant",
      color: "purple",
    },
    {
      id: 4,
      name: "🍐 Pear",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} color={fruit.color} key={fruit.id}></Card>
      ))}
    </div>
  );
}
