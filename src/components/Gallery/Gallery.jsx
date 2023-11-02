import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [clickedImage, setClickedImage] = useState([]);
  console.log(selectedImages, "this image hovered");
  console.log(clickedImage, "this image clicked");

  const handleImageHover = (index) => {
    if (!clickedImage.includes(index)) {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const handleImageLeave = (index) => {
    setSelectedImages(selectedImages.filter((i) => i !== index));
  };
  const handleImageClicked = (index) => {
    if (clickedImage.includes(index)) {
      setClickedImage(clickedImage.filter((i) => i !== index));
    } else {
      setClickedImage([...clickedImage, index]);
      setSelectedImages(selectedImages.filter((i) => i !== index));
    }
  };

  const images = [
    "/images/image-11.jpeg",
    "/images/image-1.webp",
    "/images/image-2.webp",
    "/images/image-3.webp",
    "/images/image-4.webp",
    "/images/image-5.webp",
    "/images/image-6.webp",
    "/images/image-7.webp",
    "/images/image-8.webp",
    "/images/image-9.webp",
    "/images/image-10.jpeg",
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <div
          className={`image-container ${index === 0 ? "first-image" : ""}`}
          key={index}>
          <img
            className="image"
            src={image}
            alt=""
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageLeave(index)}
            onClick={() => handleImageClicked(index)}
          />
          {selectedImages.includes(index) ? (
            <div className="blank-box"></div>
          ) : clickedImage.includes(index) ? (
            <div>
              <h2 className="blank-box">&#10003;</h2> {/* Checkmark (✓) */}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
