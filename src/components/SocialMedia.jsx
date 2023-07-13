import React from 'react';
import Underline from "../assets/icons/underline.svg";
import Instagram from '../assets/icons/instagram.svg';
import Threads from '../assets/icons/threads.svg';
import Tiktok from '../assets/icons/tiktok.svg';
import Facebook from '../assets/icons/facebook.svg';

const SocialMedia = () => {
  return (
    <section className='max-w-[1366px] mx-auto lg:flex flex-col items-start'>
      <div className='mx-[30px] md:mx-12 lg:mx-[136px] 2xl:mx-0 my-6 w-fit'>
        <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Redes Sociales</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>

      <div className='flex justify-evenly items-center mb-6 w-full md:w-[88.5%] lg:w-[80%] 2xl:w-full h-24 mx-auto 2xl:mx-0 rounded-lg bg-white shadow-md'>
        <a title='Visitame en Instagram!' href="https://www.instagram.com/rlperez1/" target='_blank' rel='noopener noreferer'><img className='w-[1.875rem]' src={Instagram} alt="Instagram" /></a>
        <a title='Visitame en Threads!' href="https://www.threads.net/@rlperez1" target='_blank' rel='noopener noreferer'><img className='w-[1.875rem]' src={Threads} alt="Threads" /></a>
        <a title='Visitame en TikTok!' href="#" target='_blank' rel='noopener noreferer'><img className='w-[1.875rem]' src={Tiktok} alt="Tiktok" /></a>
        <a title='Visitame en Facebook!' href="https://www.facebook.com/profile.php?id=1641544820&mibextid=ZbWKwL" target='_blank' rel='noopener noreferer'><img className='w-[1.875rem]' src={Facebook} alt="Facebook" /></a>
      </div>
    </section>
  )
}

export default SocialMedia