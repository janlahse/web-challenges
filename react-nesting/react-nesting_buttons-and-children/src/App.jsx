import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Im a Button!</Button>
      <Button>Me aswell..</Button>
      <Button>Button 3</Button>
      <Button>Button 5</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
