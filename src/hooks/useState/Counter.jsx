// Normal variable
let state = {
  count: 0,
};

const Counter = () => {
  // Doesn't get updated to the UI
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
