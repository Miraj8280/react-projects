import Accordion from "./components/01_accordion/Accordion";
import ColorGenerator from "./components/02_color-generator/ColorGenerator";
import StarRating from "./components/03_star-rating/StarRating";

function App() {
  return (
    <div>
      {/* Accordion - Single & Multi-Select*/}
      <Accordion />

      {/* Random Color Generator */}
      <ColorGenerator />

      {/* Star Rating  */}
      <StarRating />
    </div>
  );
}

export default App;
