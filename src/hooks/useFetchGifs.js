import React, { useState, useEffect } from 'react';
import { getFetchGifs }  from '../getFetchGifs';


export const useFetchGifs = ( category  ) => {


  const [state, setState] = useState({
    data:[],
    loading: true
  })

    // Ejecutamos solo una vez la peticion
    useEffect(() => {
      getFetchGifs(category).then( imgs => setState({ data:imgs, loading:false }));
    },[ category ]);

  return state;
}
