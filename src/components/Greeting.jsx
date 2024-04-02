import { PureComponent, useState } from "react";

class Greeting extends PureComponent {
  render() {
    console.log(`Greeting was rendered at: ${new Date().toLocaleTimeString()}`);
    return <h3>Hello, {this.props.name}!</h3>;
  }
}

// const Greeting = (props) => {
//   console.log(`Greeting was rendered at: ${new Date().toLocaleTimeString()}`);
//   return <h3>Hello, {props.name}!</h3>;
// };

export const DisplayGreet = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <label htmlFor="name">
        Name{": "}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label htmlFor="address">
        Address{": "}
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>

      <Greeting name={name} />
    </div>
  );
};
