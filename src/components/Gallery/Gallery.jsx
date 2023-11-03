import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [clickedImages, setClickedImages] = useState([]);
  const images = [
    "/images/image-11.jpeg",
    "/images/image-1_clipdrop-background-removal.webp",
    "/images/image-2_clipdrop-background-removal.webp",
    "/images/image-3_clipdrop-background-removal.webp",
    "/images/image-4_clipdrop-background-removal.webp",
    "/images/image-5_clipdrop-background-removal.webp",
    "/images/image-6_clipdrop-background-removal.webp",
    "/images/image-7.webp",
    "/images/image-8.webp",
    "/images/image-9.webp",
    "/images/image-10.jpeg",
  ];

  const [remainingImages, setRemainingImages] = useState(images);

  const handleImageClicked = (index) => {
    if (clickedImages.includes(index)) {
      setClickedImages(clickedImages.filter((i) => i !== index));
    } else {
      setClickedImages([...clickedImages, index]);
    }
  };

  // Delete Functionalities

  const handleDeleteImage = () => {
    const clickedImageUrl = clickedImages.map((index) => images[index]);

    setRemainingImages((prevRemainingImages) =>
      prevRemainingImages.filter(
        (image, index) => !clickedImageUrl.includes(images[index])
      )
    );

    setClickedImages([]);
  };

  return (
    <>
      {clickedImages.length === 0 ? (
        <h1>Gallery</h1>
      ) : (
        <div className="text">
          <h1>
            {clickedImages.length}{" "}
            {clickedImages.length === 1 ? "File" : "Files"} Selected
          </h1>
          <button onClick={() => handleDeleteImage()} className="delete-button">
            <h2>
              {clickedImages.length === 1 ? "Delete file" : "Delete files"}
            </h2>
          </button>
        </div>
      )}

      <hr />

      <div className="container">
        {remainingImages.map((image, index) => (
          <div
            className={`image-container ${index === 0 ? "first-image" : ""}`}
            key={index}>
            <div>
              <img className="image" src={image} alt="" />
            </div>
            <div>
              {clickedImages.includes(index) ? (
                <div onClick={() => handleImageClicked(index)}>
                  <h2 className="blank-box-check-mark">&#10003;</h2>{" "}
                  {/* Checkmark (✓) */}
                </div>
              ) : (
                <div
                  onClick={() => handleImageClicked(index)}
                  className="blank-box"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
