import "./Gallery.css";
const Gallery = () => {
  const images = [
    "/images/image-1.webp",
    "/images/image-2.webp",
    "/images/image-3.webp",
    "/images/image-4.webp",
    "/images/image-5.webp",
    "/images/image-6.webp",
    "/images/image-7.webp",
    "/images/image-8.webp",
    "/images/image-9.webp",
  ];
  return (
    <div className="container">
      {images.map((image, index) => (
        <div key={index} className={`image ${index === 0 ? "large" : "small"}`}>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
