import { useRef, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);

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

  //  image selection functionality

  const handleImageClicked = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  // Delete Functionalities

  const handleDeleteImage = () => {
    const selectedImageUrl = selectedImages.map((index) => images[index]);

    setRemainingImages((prevRemainingImages) =>
      prevRemainingImages.filter(
        (image, index) => !selectedImageUrl.includes(images[index])
      )
    );

    setSelectedImages([]);
  };

  // upload image functionality

  const inputRef = useRef(null);

  const handleAddImage = () => {
    inputRef.current.click();
  };

  const handleUploadImage = (event) => {
    const uploadedFiles = event.target.files;

    if (uploadedFiles.length > 0) {
      const newImages = Array.from(uploadedFiles).map((file) => {
        const objectUrl = URL.createObjectURL(file);
        return objectUrl;
      });
      setRemainingImages([...remainingImages, ...newImages]);
    }
  };

  return (
    <>
      {selectedImages.length === 0 ? (
        <h1>Gallery</h1>
      ) : (
        <div className="text">
          <h1>
            {selectedImages.length}{" "}
            {selectedImages.length === 1 ? "File" : "Files"} Selected
          </h1>
          <button onClick={() => handleDeleteImage()} className="delete-button">
            <h2>
              {selectedImages.length === 1 ? "Delete file" : "Delete files"}
            </h2>
          </button>
        </div>
      )}

      <hr />

      <div className="container">
        {remainingImages.map((image, index) => (
          <div
            className={`image-container ${index === 0 ? "first-image" : ""}`}
            style={{
              backgroundColor: selectedImages.includes(index)
                ? "#eaeaea"
                : "#ffffff",
              filter: selectedImages.includes(index) ? "grayscale(0%)" : "none",
            }}
            key={index}>
            <div>
              <img className="image" src={image} alt="" />
            </div>
            <div>
              {selectedImages.includes(index) ? (
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
        {/* default image */}

        <div onClick={handleAddImage} className="default-img-container">
          <img className="default-img" src="/images/default-image.png" alt="" />
          <h2>Add Images</h2>
          <input
            style={{ display: "none" }}
            type="file"
            ref={inputRef}
            onChange={handleUploadImage}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
