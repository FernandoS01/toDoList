import { Trash } from "phosphor-react";
import "./styles.css";

export function ListItem(props) {
  function taskCompleted(e) {
    e.target.classList.toggle("active");
  }
  return (
    <div className="ListItem">
      <h1 onClick={(e) => taskCompleted(e)}>{props.item}</h1>
      <Trash
        size={20}
        onClick={() => {
          props.delItem(props.keyId);
        }}
      />
    </div>
  );
}
