import React from 'react';
import Underline from "../assets/icons/underline.svg";
import Instagram from '../assets/icons/instagram.svg';
import Tiktok from '../assets/icons/tiktok.svg';
import Facebook from '../assets/icons/facebook.svg';

const SocialMedia = () => {
  return (
    <section className='max-w-[1366px] mx-auto lg:flex flex-col items-start mb-6'>
      <div className='mx-[30px] md:mx-12 lg:mx-[136px] 2xl:mx-0 my-6 w-fit'>
        <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Redes Sociales</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>

      <div className='flex justify-evenly items-center w-full md:w-[88.5%] lg:w-[80%] 2xl:w-full h-24 mx-auto 2xl:mx-0 rounded-lg bg-white shadow-md'>
        <a href="#"><img className='w-[1.875rem]' src={Instagram} alt="" /></a>
        <a href="#"><img className='w-[1.875rem]' src={Tiktok} alt="" /></a>
        <a href="#"><img className='w-[1.875rem]' src={Facebook} alt="" /></a>
      </div>
    </section>
  )
}

export default SocialMedia