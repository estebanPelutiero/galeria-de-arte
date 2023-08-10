import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Img1 from "../assets/carousel/1.jpg";
import Img2 from "../assets/carousel/2.jpg";
import Img3 from "../assets/carousel/3.jpg";
import Img4 from "../assets/carousel/4.jpg";

const autoplayOptions = { delay: 4000 };

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <>
      <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      id="home" className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img 
            src={Img1} 
            alt=""
            loading="lazy" />
          </div>
          <div className="embla__slide">
            <img 
            src={Img2} 
            alt=""
            loading="lazy" />
          </div>
          <div className="embla__slide">
            <img 
            src={Img3} 
            alt=""
            loading="lazy" />
          </div>
          <div className="embla__slide">
            <img 
            src={Img4} 
            alt=""
            loading="lazy" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-28 bg-gradient-to-b from-white to-white/0">
        <h1 className="py-1 leading-10 font-redHat font-medium text-[2.5rem] text-black animate-fade animate-duration-1000 animate-delay-500">
          Roberto Pérez
        </h1>
        <h4 className="leading-10 font-redHat font-medium text-[1.5rem] text-orange tracking-wider animate-fade animate-duration-1000 animate-delay-1000">
          Artista Plástico
        </h4>
      </div>
    </>
  );
};

export default EmblaCarousel;
