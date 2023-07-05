import React from "react";
import Line from "../../assets/icons/line.svg";


const Card = ({ id, img, title, detail }) => {

  return (

      <div id={id} className="flex flex-col items-center w-[18.75rem] h-[24rem]">

        {/* img */}
        <div className="w-full h-[78%] mb-3 rounded-[4px] bg-gradient-to-t from-white/50 to-white/0">
          <img className="w-full h-full shadow-md rounded-[4px] object-contain py-2" src={img} alt={title} />
        </div>

        {/* descripcion */}
        <div className="flex flex-col items-center h-fit bg-white w-full py-1 rounded-[4px] shadow-md">

          {/* titulo */}
          <div className="font-redHat font-bold text-base text-brick py-1">
            <span className="text-black">"</span>{title}
            <span className="text-black">"</span>
          </div>

          {/* linea divisoria */}

          <div className="py-1">
            <img className="bg-black/25" src={Line} alt="" />
          </div>

          {/* detalle */}
          <div className="font-redHat font-light text-sm py-1 text-black/70">
            {detail}
          </div>

        </div>
      </div>

  );
};

export default Card;
