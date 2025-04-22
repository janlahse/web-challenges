export default function App() {
  return <Sum a={4} b={5} />;
}

function Sum({ a, b }) {
  return (
    <h1>
      {a} + {b} = {a + b}
    </h1>
  );
}
