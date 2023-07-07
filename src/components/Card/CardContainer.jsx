import React from 'react';
import Card from './Card';
import Underline from "../../assets/icons/underline.svg";
import { paintings } from '../../paints';
import { Link } from 'react-router-dom';

const CardContainer = () => {

  console.log(paintings);
  
  return (

    <main className='max-w-[1366px] mx-auto'>
      <div className='w-fit mx-[8%] md:mx-[4%] lg:mx-[4.6%] my-[30px] lg:my-[50px]'>
        <h3 className='font-redHat font-semibold text-xl lg:text-2xl text-black'>Obras</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>


      <section className='max-w-[1366px] h-fit grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto '>

        {paintings.map((paint, idx) => {

          if (paint.home === true) {

            return (

              <Link key={paint.id} to={`/obras/${paint.id}`}>

                <Card 
                img={paint.img}
                title={paint.title}
                detail={paint.detail}
                />

              </Link>

            )
          }
          })
        }

      </section>

      <div className='w-fit my-8 mx-auto py-2 flex justify-center'>
        <button className='bg-orange border-white font-redHat font-semibold text-base text-background px-5 py-[0.4rem] rounded-md'>
          <Link to={"/obras"} >
            Ver todas las obras
          </Link>
        </button>
      </div>
    </main>

  )
}

export default CardContainer;