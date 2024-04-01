import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li> // Key prop added
      ))}
    </ul>
  );
};

export default List;
