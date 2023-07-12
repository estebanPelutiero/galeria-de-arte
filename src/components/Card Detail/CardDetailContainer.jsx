import React, { useEffect, useState } from 'react';
import CardDetail from './CardDetail';
import { useParams } from 'react-router-dom';
import { paintings } from '../../paints';

const CardDetailContainer = () => {

  let { id } = useParams();

  const [paint, setPaint] = useState({});

  const fetchPaint = () => {
    const result = paintings.filter(item => item.id === parseInt(id));
    setPaint(...result);
  }

  useEffect(() => {
    fetchPaint()
  }, [])

  return (
    <div className='flex justify-center'>
      <CardDetail
      key={paint.id}
      img={paint.img}
      title={paint.title}
      detail={paint.detail}
       />
    </div>
  )
}

export default CardDetailContainer