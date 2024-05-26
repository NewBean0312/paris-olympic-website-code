import React from "react";

const Slider: React.FC = () => {
  return (
    <section className="slider">
      <img
        src={`${process.env.PUBLIC_URL}/images/slide-image.jpeg`}
        alt="slide-img"
      />
    </section>
  );
};

export default Slider;
