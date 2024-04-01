import { useState } from 'react';

function MultiState() {
  // State variable for count
  const [count, setCount] = useState(0);

  // State variable for username
  const [username, setUsername] = useState('');

  // State variable for isLoggedin
  const [isLoggedin, setIsLoggedin] = useState(false);

  // Function to handle count increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle username change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle login/logout
  const handleLoginToggle = () => {
    setIsLoggedin(!isLoggedin);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <hr />

      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <p>Welcome, {username}!</p>

      <hr />

      <p>User is {isLoggedin ? 'logged in' : 'logged out'}.</p>
      <button onClick={handleLoginToggle}>
        {isLoggedin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default MultiState;