import "./App.css";
import ClickCounter from "./hoc/ClickCounter";
import HoverCounter from "./hoc/HoverCounter";
// import { Parent } from "./hooks/useRef";
// import { VideoPlayer } from "./hooks/useRef";
// import { ContactForm } from "./components/EventHandler";
// import { FocusInputMount } from "./hooks/useRef";
// import MultiState from './components/MultiState';
// import User from './components/User';
// import Counter from './components/Counter';
// import List from "./components/List";
// import { DisplayGreet } from "./components/Greeting";
// import Form from "./components/Form";
// import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
