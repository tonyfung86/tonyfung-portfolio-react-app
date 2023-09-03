import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["US", "JP", "HK", "TW", "UK"];
  //items = [];

  //Hook
  const [selectedItem, setSelectItem] = useState(-1);

  //const handleClick = (event: MouseEvent) => {
  //  console.log(event);
  //};

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
