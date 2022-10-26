import { useRef } from "react";

import { Plus } from "phosphor-react";
import "./styles.css";

export function SearchBar({ getValue }) {
  const ref = useRef();
  function sendValue() {
    if(ref.current.value === ''){
      return null
    }
     getValue(ref.current.value);
      ref.current.value = "";
  }
  return (
    <div className="SearchBar">
      <input ref={ref} type="text" />
        <Plus size={23} className="Plus" onClick={() => sendValue()} />
    </div>
  );
}
