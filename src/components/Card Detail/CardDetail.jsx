import React from 'react';
import Line from '../../assets/icons/line.svg';
import Underline from '../../assets/icons/underline.svg';
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Mail from '../../assets/icons/email.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Tiktok from '../../assets/icons/tiktok.svg';
import Facebook from '../../assets/icons/facebook.svg';

const CardDetail = ({ id, img, title, detail }) => {

  return (

       <article id={id} className="flex flex-col items-center lg:items-start w-[20.5rem] md:w-[42.5rem] lg:w-[68.375rem] h-fit ">

        <div className='flex flex-col md:flex-row lg:flex-col items-center w-full lg:w-1/2 py-1 md:py-2 mt-20 md:mt-28 mb-6 rounded-[4px] shadow-md bg-white'>

          {/* titulo */}
          <div className="font-redHat font-bold text-base lg:text-lg text-brick py-1 w-full text-center">
            <span className="text-black">"</span>{title}
            <span className="text-black">"</span>
          </div>

          {/* linea divisoria */}

          <img className="bg-black/25 md:rotate-90 lg:rotate-0 w-6 lg:w-14" src={Line} alt="" />

          {/* detalle */}

          <div className="font-redHat font-light text-sm lg:text-base py-1 text-black/70 w-full text-center">
            {detail}
          </div>
        </div>

        {/* img */}

        <div className="flex justify-center h-[78%] lg:h-full mb-3 rounded-[4px] bg-gradient-to-t from-white to-background">
          <img className="h-full rounded-[4px] object-contain" src={img} alt={title} />
        </div>

        <div className='w-full my-7'>
          <button className='flex items-center justify-center gap-3 bg-white rounded-lg border-[1px] border-orange h-9 py-1 px-2'>
              <p className='font-redHat font-bold text-lg text-orange'>Consultar precio</p>
              <img src={Whatsapp} alt="" />  
          </button>
        </div>

        {/* Pensamiento sobre la obra */}

        <div className='px-6 py-4 mt-3 mb-6 bg-white rounded-lg shadow-md'>
          <p className='text-black/70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure ab veniam soluta inventore similique voluptas minus officia laborum! Ex culpa sequi est aliquid, animi officia error harum quis minus.
          </p>
        </div>

        {/* Contacto y redes sociales */}

        <section className='w-full'>

          {/* Contacto */}

          <div className='w-full my-8'>

            <div className='py-4'>
              <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Contacto</h3>
              <div><img src={Underline} alt="/" /></div>
            </div>

            {/* recuadro de iconos y texto */}

            <div className='md:flex justify-around my-2 py-1 px-6 bg-white rounded-lg shadow-md'>

              <div className='flex items-center gap-4 my-3 w-fit'>
                <a href="#">
                  <img className='lg:w-7' src={Whatsapp} alt="Whatsapp" />
                </a>
                <p>+ 54 3489 501917</p>
              </div>

              <div className='flex items-center gap-4 my-3 w-fit'>
                <a href="#">
                  <img className='lg:w-7' src={Mail} alt="Email" />
                </a>
                <p>hola@rexoart.com</p>
              </div>

            </div>

          </div>

          {/* Redes sociales */}

          <div className='w-full my-8'>

            <div className='py-4'>
              <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Redes Sociales</h3>
              <div><img src={Underline} alt="/" /></div>
            </div>

            <div className='flex justify-evenly my-2 py-5 px-3 bg-white rounded-lg shadow-md'>
              <a href="#"><img className='w-[1.875rem]' src={Instagram} alt="" /></a>
              <a href="#"><img className='w-[1.875rem]' src={Tiktok} alt="" /></a>
              <a href="#"><img className='w-[1.875rem]' src={Facebook} alt="" /></a>
            </div>

          </div>

        </section>

      </article>

  )
}

export default CardDetail