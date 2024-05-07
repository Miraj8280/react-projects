import { useState } from "react";
import "./starRating.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(index) {
    setRating(index);
  }

  function handleMouseHover(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      <h2>Star Rating</h2>
      <div className="stars">
        {[...Array(noOfStars)].map((_, index) => {
          index++;
          return (
            <h3
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleOnClick(index)}
              onMouseMove={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              &#9733; {/* Unicode for a solid star */}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
