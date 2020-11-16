import React from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './AddCategory';

export const Navbar = (  { setCategory } ) => {
  return (
    <nav className = 'navbar'>

        <h1>Buscador de Gifs</h1>
        <AddCategory setCategory = { setCategory }/>
      
    </nav>
  )
}

// Navbar requiere el props setCategory

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired
}
