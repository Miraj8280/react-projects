import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { counter, incrementCounter } = props;

  return (
    <div>
      <h3>Count: {counter}</h3>
      <button onClick={incrementCounter}>Click me</button>
    </div>
  );
};

const EnhancedClickCounter = withCounter(ClickCounter);
export default EnhancedClickCounter;
