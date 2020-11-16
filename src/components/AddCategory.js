import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';



export const AddCategory = (  { setCategory }  ) => {

  const [value, setValue] = useState('');

  // Seteamos el valor del input en el estado
  const handleInputChange = (e) => { 
    setValue(  e.target.value );
  }

  // Setiamos el valor del input en setCategory
  const handleSubmit = (e) => {
    e.preventDefault();

    if (  value.trim().length > 3 ) {
      setCategory( categories => [  value, ...categories ] );
      setValue('');

    }else {
      Swal.fire({
        title: 'Error :(',
        text: 'Error al buscar sus gifs',
        icon: 'error',
        confirmButtonText: 'Reintentar',
        confirmButtonColor: '#20232A'
      })
    }

  }

  return (
    <form onSubmit = { handleSubmit } >
      <div className="add__category">
      <input
          type="text"
          placeholder =" Ingrese una categoría para buscar sus gifs"
          value = { value }
          onChange = { handleInputChange }
         />
        <button type ="submit" >Buscar</button>

      </div>
    </form>
    
  )
}


// AddCategory requiere el props setCategory

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}
