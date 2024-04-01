import { useState } from "react";

/* CLICK EVENT */
export const ButtonClick = () => {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

/* INPUT CHANGE EVENT */
export const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleChange} />
    </div>
  );
};

/* FORM SUBMISSION EVENT */
export const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
      <button type="submit">Submit</button>
    </form>
  );
};
