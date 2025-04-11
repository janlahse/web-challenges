import { Header } from "../Header/Header.js";
import { Form } from "../Form/Forms.js";
import { CardList } from "../CardList/CardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
