// -----------------------------------------------------------------------------
//       Counter without state variable
// -----------------------------------------------------------------------------
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

/*
// -----------------------------------------------------------------------------
//       Counter with state variable
// -----------------------------------------------------------------------------
// useState hook
import { useState } from "react";

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
*/

// -----------------------------------------------------------------------------
//       Counter using custom button and props
// -----------------------------------------------------------------------------
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
};

// Custom button without destructuring props
/*
function CustomButton(props) {
  function handleOnClick() {
    props.setCount(props.count + 1);
  }

  return (
    <div>
      <button onClick={handleOnClick}>Counter {props.count}</button>
    </div>
  );
}
*/

// Custom button with destructuring props
function CustomButton({ count, setCount }) {
    function handleOnClick() {
        setCount(count + 1);
    }
    
    return (
        <div>
            <button onClick={handleOnClick}>Counter {count}</button>
        </div>
    );
}

export default Counter;
