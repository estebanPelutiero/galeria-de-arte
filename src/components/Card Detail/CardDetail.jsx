import React, { useState } from "react";
import Line from "../../assets/icons/line.svg";
import Underline from "../../assets/icons/underline.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Mail from "../../assets/icons/email.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Threads from "../../assets/icons/threads.svg";
import Tiktok from "../../assets/icons/tiktok.svg";
import Facebook from "../../assets/icons/facebook.svg";

const CardDetail = ({ id, img, title, detail }) => {

  return (

    <div className="flex flex-col 2xl:justify-center max-w-[1366px]">

      <main className="lg:flex justify-between mt-20 md:mt-28">
        
        <article
          id={id}
          className="lg:flex items-center w-[20.5rem] md:w-[42.5rem] lg:w-[40%] h-fit lg:h-full mx-auto"
        >
          {/* img */}

          <div className="h-[78%] lg:h-full lg:flex items-center mb-3 lg:mb-0 rounded-[4px]">
            <img
              className="rounded-[4px] object-contain"
              src={img}
              alt={title}
            />
          </div>
        </article>

        {/* Titulo y descripcion de card */}

        <section className="flex flex-col justify-stretch items-center mt-5 lg:px-10 py-5 px-3 mx-4 md:mx-5 lg:mt-0 h-fit lg:w-[50%] rounded-md bg-white/50 shadow-md">

          {/* Titulo */}

          <div className="flex flex-col items-center w-full md:w-fit md:px-6 mb-5 lg:mt-3 lg:mb-5 py-1 md:py-2 rounded-[4px] shadow-md bg-white">
            <div className="font-redHat font-bold text-base lg:text-lg text-brick py-1 w-full text-center">
              <span className="text-black">"</span>
              {title}
              <span className="text-black">"</span>
            </div>

            {/* linea divisoria */}

            <img
              className="bg-black/25 my-1"
              src={Line}
              alt=""
            />

            {/* detalle */}

            <div className="font-redHat font-light text-sm lg:text-base py-1 text-black/70 w-full text-center">
              {detail}
            </div>
          </div>

          {/* Pensamiento sobre la obra */}

          <div className="px-6 py-4 lg:my-5 lg:w-full bg-white rounded-lg shadow-md">
            <p className="text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              iure ab veniam soluta inventore similique voluptas minus officia
              laborum! Ex culpa sequi est aliquid, animi officia error harum
              quis minus.
            </p>
          </div>

          {/* Boton consulta de precio */}

          <div className="flex flex-col md:flex-row md:justify-around lg:justify-between items-center w-full lg:w-[75%] mt-7 lg:my-5">
            <a 
            href={`https://wa.me/543489501917?text=Hola,%20me%20gustaría%20tener%20mas%20info%20de%20la%20obra%20"${title}"`} 
            target="_blank" rel="noopener noreferer"
            className="flex items-center bg-orange rounded-lg border-[1px] border-orange h-9 py-1 px-2 my-3 shadow-md">
              <p className="font-redHat font-semibold text-lg text-white text-center">
                Consultar precio
              </p>
            </a>

            {/* Boton de ver en pantalla completa */}

            <a href={img} target="_blank" rel="noopener noreferer"
            className="flex items-center justify-center bg-white rounded-lg border-[1px] border-orange h-7 my-4 py-1 px-2 shadow-md">
              <p className="font-redHat font-bold text-sm text-brick">
                Ver en pantalla completa
              </p>
            </a>
          </div>

        </section>

      </main>

      {/* Contacto y redes sociales */}

      <section className="w-full px-4 md:px-10 lg:px-12">

        {/* Contacto */}

        <div className="w-full my-8">
          <div className="py-4">
            <h3 className="font-redHat font-semibold text-xl lg:text-2xl text-black">
              Contacto
            </h3>
            <div>
              <img src={Underline} />
            </div>
          </div>

          {/* recuadro de iconos y texto */}

          <div className="md:flex justify-around my-2 py-1 px-6 md:h-24 bg-white rounded-lg shadow-md">

            {/* Whatsapp */}

            <div className="flex items-center gap-4 my-4 w-fit">
              <a href="https://wa.me/543489501917" title="Ir al chat" target="_blank" rel="noopener noreferer">
                <img className="w-6 md:w-7" src={Whatsapp} alt="Whatsapp" />
              </a>
              <p className="font-redHat text-base px-3">+ 54 3489 501917</p>
            </div>

            {/* Gmail */}

            <div className="flex items-center gap-4 my-4 w-fit">
              <a title="E-mail" href="mailto:rlperez1@gmail.com">
                <img className="w-6 md:w-7" src={Mail} alt="Email" />
              </a>
              <p className="font-redHat text-base px-3">rlperez1@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Redes sociales */}

        <div className="w-full my-8">
          <div className="py-4">
            <h3 className="font-redHat font-semibold text-xl lg:text-2xl text-black">
              Redes Sociales
            </h3>
            <div>
              <img src={Underline} alt="/" />
            </div>
          </div>

          <div className="flex justify-around items-center my-2 py-5 px-3 h-24 bg-white rounded-lg shadow-md">
            <a href="https://www.instagram.com/rlperez1/" title="Visitame en Instagram!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.threads.net/@rlperez1" title="Visitame en Threads!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Threads} alt="Threads" />
            </a>
            <a href="#" title="Visitame en TikTok!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Tiktok} alt="Tiktok" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=1641544820&mibextid=ZbWKwL" title="Visitame en Facebook!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetail;
