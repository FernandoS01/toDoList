import { useState } from "react";

import { SearchBar } from "../../Components/SearchBar";
import { ListItem } from "../../Components/ListItem";

export function Home() {
  const [list, setList] = useState([]);

  function getValue(value) {
    setList([...list, value]);
  }
  function delItem(e) {
    const name = list[e]
    setList(list.filter(item => item !== name))
  }
  return (
    <>
      <SearchBar getValue={getValue} />
      <div>
        {list.map((item, id) => {
          return <ListItem keyId={id} item={item} delItem={delItem} />;
        })}
      </div>
    </>
  );
}
