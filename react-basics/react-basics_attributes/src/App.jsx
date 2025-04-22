import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Article Header</h2>
      <label htmlFor="test-input">Test Input</label>
      <input id="test-input"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Never_Gonna_Give_You_Up"
      >
        A marvelous article
      </a>
    </article>
  );
}
