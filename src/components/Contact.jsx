import React from 'react';
import Underline from '../assets/icons/underline.svg';
import Line from '../assets/icons/line.svg';
import Mail from '../assets/icons/email.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';

const Contact = () => {
  return (
    <section data-aos="fade-right" data-aos-duration="1500" id='contact' className='max-w-[1366px] mx-auto lg:flex flex-col items-start px-4 md:px-9 lg:px-16'>
      <div className='my-5 w-fit'>
        <h3 className='font-redHat font-semibold text-xl text-black'>Contacto</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>

      <div className='flex flex-col md:flex-row justify-evenly items-start md:items-center w-full rounded-lg h-28 mx-auto mb-10 bg-white shadow-md'>

        <div className='flex items-end mx-[25px] py-2'>
          <a title='E-mail' href="mailto:rlperez1@gmail.com"><img className='w-[1.8rem]' src={Mail} alt="E-mail" /></a>
          <p className='font-redHat font-light text-lg mx-4'>
            rlperez1@gmail.com
          </p>
        </div>

        <img className='hidden md:block rotate-90 h-[0.6px] bg-black/30' src={Line} alt="" />

        <div className='flex items-start mx-[25px] py-2'>
          <a href="https://wa.me/543489501917" title='Ir al chat' target='_blank' rel='noopener noreferer'><img className='w-[1.8rem]' src={Whatsapp} alt="Whatsapp" /></a>
          <p className='font-redHat font-light text-xl mx-4'>
            + 54 3489 501917
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact