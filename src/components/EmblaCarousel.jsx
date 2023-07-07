import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Img1 from "../assets/carousel/1.jpg";
import Img2 from "../assets/carousel/2.jpg";

const autoplayOptions = { delay: 6000 };

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <>
      <div id="home" className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src={Img1} alt="" />
          </div>
          <div className="embla__slide">
            <img src={Img2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 bg-gradient-to-b from-white to-white/0">
        <h1 className="leading-10 font-redHat font-semibold text-4xl text-black">
          Roberto Pérez
        </h1>
        <h4 className="leading-10 font-redHat font-semibold text-xl text-orange">
          Artista Plástico
        </h4>
      </div>
    </>
  );
};

export default EmblaCarousel;
