import React from 'react';
import Card from './Card';
import Underline from "../../assets/icons/underline.svg";
import { paintings } from '../../paints';
import { Link } from 'react-router-dom';

const CardContainer = () => {

  return (

    <main className='max-w-[1366px] mx-auto'>
      <div className='px-4 md:px-9 lg:px-16 mt-8 mb-5'>
        <h3 className='font-redHat font-semibold text-xl text-black'>Obras</h3>
        <div><img src={Underline} alt="/" /></div>
      </div>


      <section className='max-w-[1366px] h-fit grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto'>

        {paintings.map((paint, idx) => {

          if (paint.home === true) {

            return (

              <Link key={idx} to={`/obras/${paint.id}`}>

                <Card 
                key={paint.id}
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

      <Link to={"/obras"} >
        <div className='w-fit mt-14 mb-20 mx-auto p-2 flex justify-center'>
          <button className='bg-orange border-white font-redHat font-semibold text-base lg:text-lg text-background px-5 py-[0.4rem] rounded-md shadow-md hover:scale-[102%] duration-200 ease-in-out hover:bg-orange/90'>
              Ver todas las obras
          </button>
        </div>
      </Link>
      
    </main>

  )
}

export default CardContainer;