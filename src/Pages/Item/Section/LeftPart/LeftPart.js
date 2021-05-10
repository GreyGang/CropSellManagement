import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../../../../Assets/Images/jpg/img1.jpg";
import img2 from "../../../../Assets/Images/jpg/img2.jpg";
import img3 from "../../../../Assets/Images/jpg/img3.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
];

export default function LeftPart() {
  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      items={images}
    />
  );
}
