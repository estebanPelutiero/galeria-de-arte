import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import { paintings } from '../paints';

const Paintings = () => {

  return (

    <main className='max-w-[1366px] mx-auto'>

      <section className='h-fit grid grid-cols-1 justify-items-center gap-y-10 gap-x-1 md:grid-cols-2 lg:grid-cols-3 py-20 md:py-28 mx-auto'>

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