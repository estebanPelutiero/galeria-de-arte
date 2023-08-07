import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-end items-center w-full bg-black/90 h-8 md:h-12'>
        <div className='max-w-[1366px] mr-8 md:mr-11'>
            <div className='font-redHat text-white text-sm md:text-base [word-spacing:2px]'>
                <p>Creado por <a title='Contactame via Whatsapp!' className='font-medium text-brick' href="https://wa.me/543489311605">Esteban Pelutiero</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer