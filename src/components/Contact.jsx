import React from 'react';
import Underline from '../assets/icons/underline.svg';
import Line from '../assets/icons/line.svg';
import Mail from '../assets/icons/email.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';

const Contact = () => {
  return (
    <section id='contact' className='max-w-[1366px] mx-auto lg:flex flex-col items-start px-4 md:px-9 lg:px-16'>
      <div className='my-6 w-fit'>
        <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Contacto</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>

      <div className='flex flex-col md:flex-row justify-evenly items-start md:items-center w-full rounded-lg h-24 mx-auto mb-10 bg-white shadow-md'>

        <div className='flex items-center mx-[30px]'>
          <a title='E-mail' href="mailto:rlperez1@gmail.com"><img className='w-5 md:w-7' src={Mail} alt="E-mail" /></a>
          <p className='font-redHat text-base px-3'>
            rlperez1@gmail.com
          </p>
        </div>

        <img className='hidden md:block rotate-90 h-[0.6px] bg-black/30' src={Line} alt="" />

        <div className='flex items-center mx-[30px]'>
          <a href="https://wa.me/543489501917" title='Ir al chat' target='_blank' rel='noopener noreferer'><img className='w-5 md:w-7' src={Whatsapp} alt="Whatsapp" /></a>
          <p className='font-redHat text-base px-3'>
            + 54 3489 501917
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact