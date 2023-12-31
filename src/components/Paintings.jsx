import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import Underline from '../assets/icons/underline.svg';
import { paintings } from '../paints';

const Paintings = () => {


  return (

    <main className='max-w-[1366px] mx-auto'>

      <div className='px-4 md:px-9 lg:px-16 pt-20 md:pt-28'>

        <h1 className='font-redHat font-semibold text-xl text-black'>
          Todas las obras
        </h1>
        <div>
          <img src={Underline} alt="" />
        </div>

      </div>

      <section className='h-fit grid grid-cols-1 justify-items-center gap-y-10 gap-x-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pt-6 pb-12'>

        {paintings.map((paint, idx)=> {

          return (

            <Link key={idx} to={`/obras/${paint.id}`}>

              <Card 
              key={paint.id}
              img={paint.img}
              title={paint.title}
              detail={paint.detail}/>

            </Link>

          )

        })  
        }

      </section>

    </main>
  )
}

export default Paintings