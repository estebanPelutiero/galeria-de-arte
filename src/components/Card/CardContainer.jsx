import React from 'react';
import Card from './Card';
import Underline from "../../assets/icons/underline.svg";
import {paintings} from '../paints array/paints';

const CardContainer = () => {

  return (

    <>
      <div className='mx-[30px] md:mx-12 lg:mx-[136px] my-[30px] lg:my-[50px]'>
        <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Obras</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>


      <div className='grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 mx-[30px] md:mx-12 lg:mx-[136px] '>

        {paintings.map((paint) => {

          if (paint.home === true) {

            return (
    
              <Card 
              key={paint.id}
              img={paint.img}
              title={paint.title}
              detail={paint.detail}
              />

            )

          }
          })
        }

      </div>
    </>

  )
}

export default CardContainer;