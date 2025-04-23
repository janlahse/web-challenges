import { Image } from "./Image.jsx";
import avatar from "./img/avatar.jpg";

export function Logo() {
  <button
    type="button"
    onClick={() => console.log("I could toggle a profile!")}
    aria-label="toggle profile"
  >
    <Image src={avatar} alt="avatar" />
  </button>;
}
