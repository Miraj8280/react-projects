import { useState } from "react";

const User = () => {
  const [message, setMessage] = useState("Welcome to React world!");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default User;
