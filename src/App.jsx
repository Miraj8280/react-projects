import Accordion from "./components/01_accordion/Accordion";
import ColorGenerator from "./components/02_color-generator/ColorGenerator";
import StarRating from "./components/03_star-rating/StarRating";
import ImageSlider from "./components/04_image-slider/ImageSlider";

function App() {
  return (
    <div>
      {/* Accordion - Single & Multi-Select*/}
      <Accordion />

      {/* Random Color Generator */}
      <ColorGenerator />

      {/* Star Rating  */}
      <StarRating />

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
