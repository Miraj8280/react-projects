import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Enter your name"
      />
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;
