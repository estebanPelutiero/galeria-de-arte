import React from "react";
import Line from "../../assets/icons/line.svg";
import Underline from "../../assets/icons/underline.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Mail from "../../assets/icons/email.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Threads from "../../assets/icons/threads.svg";
import Tiktok from "../../assets/icons/tiktok.svg";
import Facebook from "../../assets/icons/facebook.svg";

const CardDetail = ({ id, img, title, detail, think }) => {

  return (

    <div className="flex flex-col 2xl:justify-center max-w-[1366px]">

      <main className="lg:flex justify-between mt-20 md:mt-28">
        
        <article
          data-aos="fade-right" data-aos-duration="1500"
          id={id}
          className="md:flex items-center justify-center w-[20.5rem] md:w-[42.5rem] lg:w-[42%] h-fit lg:h-full mx-auto bg-white/50 rounded-md shadow-md p-2"
        >
          {/* img */}

          <div className="h-[78%] lg:h-full lg:flex items-center rounded-[4px]">
            <img
              className="rounded-[4px] object-contain"
              src={img}
              alt={title}
            />
          </div>
        </article>

        {/* Titulo y descripcion de card */}

        <section data-aos="fade-left" data-aos-duration="1500" className="flex flex-col justify-stretch items-center mt-5 lg:px-10 py-5 px-3 mx-4 md:mx-5 lg:mt-0 h-fit lg:w-[50%] rounded-md bg-white/50 shadow-md">

          {/* Titulo */}

          <div className="flex flex-col md:flex-row items-center w-full md:px-4 mb-5 lg:mt-3 lg:mb-5 py-1 md:py-2 rounded-[4px] shadow-md bg-white">
            <div className="font-redHat font-bold text-base lg:text-lg text-brick py-1 w-full text-center">
              <span className="text-black">"</span>
              {title}
              <span className="text-black">"</span>
            </div>

            {/* detalle */}

            <div className="font-redHat font-light text-sm lg:text-base py-1 text-black/70 w-full text-center">
              {detail}
            </div>
          </div>

          {/* Pensamiento sobre la obra */}

          <div className="px-6 py-4 lg:my-5 lg:w-full bg-white rounded-lg shadow-md">
            <p className="text-black/70 font-think-text leading-7 tracking-wider text-justify">
              {think}
            </p>
          </div>

          {/* Boton consulta de precio */}

          <div className="flex flex-col md:flex-row md:justify-around lg:justify-between items-center w-full lg:w-[75%] mt-7 lg:my-5">
            <a 
            title={`Mas info sobre "${title}"`}
            href={`https://wa.me/543489501917?text=Hola,%20me%20gustaría%20tener%20mas%20info%20de%20la%20obra%20"${title}"`} 
            target="_blank" rel="noopener noreferer"
            className="flex items-center bg-orange rounded-lg border-[1px] border-orange h-9 py-1 px-2 my-3 shadow-md">
              <p className="font-redHat font-semibold text-lg text-white text-center">
                Consultar precio
              </p>
            </a>

            {/* Boton de ver en pantalla completa */}

            <a href={img} target="_blank" rel="noopener noreferer"
            className="flex items-center justify-center bg-white rounded-lg border-[1px] border-orange/50 h-7 my-4 py-1 px-2 shadow-md">
              <p className="font-redHat font-bold text-sm text-brick">
                Ver en pantalla completa
              </p>
            </a>
          </div>

        </section>

      </main>

      {/* Contacto y redes sociales */}

      <section data-aos="fade-right" data-aos-duration="1500" className="w-full px-4 md:px-10 lg:px-12">

        {/* Contacto */}

        <div className="w-full my-8">
          <div className="py-4">
            <h3 className="font-redHat font-semibold text-xl text-black">
              Contacto
            </h3>
            <div>
              <img src={Underline} />
            </div>
          </div>

          {/* recuadro de iconos y texto */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly my-2 px-6 h-28 bg-white rounded-lg shadow-md">

            {/* Gmail */}

            <div className="flex items-end gap-3 w-fit py-1">
              <a title="E-mail" href="mailto:rlperez1@gmail.com">
                <img className="w-[1.8rem]" src={Mail} alt="Email" />
              </a>
              <p className="font-redHat font-light text-lg px-3">rlperez1@gmail.com</p>
            </div>

            {/* Whatsapp */}

            <div className="flex items-start gap-3 w-fit py-1">
              <a href="https://wa.me/543489501917" title="Ir al chat" target="_blank" rel="noopener noreferer">
                <img className="w-[1.8rem]" src={Whatsapp} alt="Whatsapp" />
              </a>
              <p className="font-redHat font-light text-xl px-3">+ 54 3489 501917</p>
            </div>
            
          </div>
        </div>

        {/* Redes sociales */}

        <div className="w-full my-8">
          <div className="py-4">
            <h3 className="font-redHat font-semibold text-xl text-black">
              Redes Sociales
            </h3>
            <div>
              <img src={Underline} alt="/" />
            </div>
          </div>

          <div className="flex justify-around items-center my-2 py-5 px-3 h-28 bg-white rounded-lg shadow-md">
            <a href="https://www.instagram.com/rlperez1/" title="Visitame en Instagram!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.threads.net/@rlperez1" title="Visitame en Threads!" target='_blank' rel='noopener noreferer'>
              <img className="w-[1.875rem]" src={Threads} alt="Threads" />
            </a>
            <a href="https://www.tiktok.com/@robertorexoperez308" title="Visitame en TikTok!" target='_blank' rel='noopener noreferer'>
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
