import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    firstName: "Miraj",
    lastName: "Asraf",
    email: "miraj@example.com",
  });

  return (
    <>
      <label htmlFor="firstName">
        First Name:
        <input
          type="text"
          value={input.firstName}
          onChange={(event) =>
            setInput({ ...input, firstName: event.target.value })
          }
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          value={input.lastName}
          onChange={(event) =>
            setInput({ ...input, lastName: event.target.value })
          }
        />
      </label>
      <label htmlFor="email">
        First Name:
        <input
          type="email"
          value={input.email}
          onChange={(event) =>
            setInput({ ...input, email: event.target.value })
          }
        />
      </label>
      <p>
        Full Name: {input.firstName} {input.lastName}
      </p>
      <p>Email: {input.email}</p>
    </>
  );
};

export default Form;
