import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { counter, incrementCounter } = props;

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onMouseOver={incrementCounter}>Hover me</button>
    </div>
  );
};

const EnhancedHoverCounter = withCounter(HoverCounter);
export default EnhancedHoverCounter;
