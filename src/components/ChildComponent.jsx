const ChildComponent = (props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Welcome, {props.name}!</p>
    </div>
  );
};

export default ChildComponent;
