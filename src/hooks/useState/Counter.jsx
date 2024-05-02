// Counter without state variable
/*
// Normal variable
let state = {
  count: 0,
};

const Counter = () => {
  // Doesn't get updated to the
  function handleOnClick() {
    state.count = state.count + 1;
    console.log(state.count);
  }

  return (
    <div>
      <button onClick={handleOnClick}>Counter {state.count}</button>
    </div>
  );
};

export default Counter;
*/

import { useState } from "react";

// Counter with state variable
// useState hook

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleOnClick}>Counter {count}</button>
    </div>
  );
};

export default Counter;
