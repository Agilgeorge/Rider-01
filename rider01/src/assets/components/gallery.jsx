import React from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kolli1 from "../images/kolli1.jpeg";
import kolli2 from "../images/kolli2.jpg";
import kolli3 from "../images/kolli3.jpg";
import megha1 from "../images/megha1.jpg";
import megha2 from "../images/megha2.jpg";
import megha3 from "../images/megha3.jpg";
import yelagiri1 from "../images/yelagir1.jpg";
import yelagiri3 from "../images/yelagiri3.jpeg"

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="flex justify-center mt-12">
        <h1 className="font-felldo drop-shadow-xl font-semibold text-4xl">
          Our Rides
        </h1>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-3xl text-center mb-6">Kolli Hills</h2>
        <Slider {...settings} className="w-3/4 mx-auto">
          <div>
            <img
              src={kolli2}
              alt="Kolli Hills 1"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
          <div>
            <img
              src={kolli3}
              alt="Kolli Hills 2"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
          <div>
            <img
              src={kolli1}
              alt="Kolli Hills 3"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
        </Slider>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-3xl text-center mb-6">Yelagiri</h2>
        <Slider {...settings} className="w-3/4 mx-auto">
          <div>
            <img
              src={yelagiri3}
              alt="Yelagiri 1"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
          <div>
            <img
              src={yelagiri1}
              alt="Yelagiri 3"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
        </Slider>
      </div>
      <div className="mt-12 mb-12">
        <h2 className="font-semibold text-3xl text-center mb-6">Meghamalai</h2>
        <Slider {...settings} className="w-3/4 mx-auto">
          <div>
            <img
              src={megha1}
              alt="Meghamalai 1"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
          <div>
            <img
              src={megha2}
              alt="Meghamalai 2"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
          <div>
            <img
              src={megha3}
              alt="Meghamalai 3"
              className="max-w-full max-h-96 w-auto h-auto mx-auto rounded-md"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
