import "./Tag.css";

export default function Tag({ tag }) {
  const classes = "tag" + (tag == "admin" ? " tag--highlight" : "");
  return <li className={classes}>{tag}</li>;
}
