export default function App() {
  function handleClick() {
    console.log("Oh yes, you clicked the Button");
  }

  return (
    <Button
      color="#abc"
      disabled={false}
      text="Buttoning. Yeah."
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ height: "80px", backgroundColor: color }}
    >
      {text}
    </button>
  );
}
