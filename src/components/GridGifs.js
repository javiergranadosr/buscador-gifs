import React from 'react';
import CardGif from './CardGif';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GridGifs = (  { category } ) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
    <h3> Gifs de { category } </h3>
    {<div className = 'container' >
         {
          images.map( imgs => (
            <CardGif 
              key = { imgs.id }
              { ...imgs }
            />
          ) )
         }
    </div>}
    </>
  )
}

// Obligatorio el props category para el componente GridGifs

GridGifs.propTypes = {
  category: PropTypes.string.isRequired
}
