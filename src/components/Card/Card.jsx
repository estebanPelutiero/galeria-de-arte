import React from "react";
import Line from "../../assets/icons/line.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const aosInit = () => {
  AOS.init();
} 

aosInit();

const Card = ({ img, title, detail }) => {

  return (

      <article className="flex flex-col items-center w-[18.75rem] h-[24.5rem]">

        {/* img */}
        <div className="flex justify-center w-full h-[78%] mb-3 p-2 rounded-[4px] bg-gradient-to-t from-white to-background">
          <img 
          className="w-full rounded-[4px] object-cover" 
          src={img} 
          alt={title}
          loading="lazy"
          />
        </div>

        {/* descripcion */}
        <div className="flex flex-col items-center w-full py-1 rounded-[4px] shadow-md bg-white">

          {/* titulo */}
          <div className="font-redHat font-bold text-base text-brick py-1">
            <span className="text-black">"</span>{title}
            <span className="text-black">"</span>
          </div>

          {/* linea divisoria */}

          <img className="bg-black/25" src={Line} alt="" />

          {/* detalle */}
          <div className="font-redHat font-light text-sm py-1 text-black/70">
            {detail}
          </div>

        </div>
      </article>

  );
};

export default Card;
