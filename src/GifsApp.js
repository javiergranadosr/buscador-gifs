import React, { useState } from 'react';
import { GridGifs } from './components/GridGifs';
import { Navbar } from './components/Navbar';


export const GifsApp = () => {

  const [categories, setCategory] = useState(['Goku']);

  return <> 
  
    <Navbar setCategory = { setCategory } /> 
    {
      categories.map( category =>  (
        <GridGifs
          key = { category } 
          category = { category }
        />
      ))
    }
    
  </>

}