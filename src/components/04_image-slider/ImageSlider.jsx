import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(imgUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${imgUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

//   console.log(images);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (error !== null) {
    return <div>Error occurred during fetching the API: {error}</div>;
  }

  return (
    <div className="image-container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}/>
      {images && images.length
        ? images.map((imgItem, index) => (
            <img
              key={imgItem.id}
              src={imgItem.download_url}
              alt={imgItem.author}
              className={
                currentSlide === index ? "current-image" : "current image hide-current-image"
              }
            />
          ))
        : null}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>

        <span className="circles">
            {images && images.length ? images.map((_, index) => (
                <button
                    key={index}
                    className={
                        currentSlide === index ? "current-cirle" : "current-circle inactive-circle"
                    }
                    onClick={() => setCurrentSlide(index)}
                ></button>
            )) : null}
        </span>
    </div>
  );
}
