export default function App() {
  return <Greeting name="Sven" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name == "Sven" ? "Coach" : name}!</h1>;
}
