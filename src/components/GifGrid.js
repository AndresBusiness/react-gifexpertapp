import React from 'react'
import GridGifItem from './GridGifItem'

import useFetchGif from './../hooks/useFetchGif'

export const GifGrid = ({categoria}) => {

  const {data:imagenes, loading }= useFetchGif(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      { loading && <p>Loading...</p>}
       <div className="card-grid">
            {
              imagenes.map((imagen)=>(
               <GridGifItem
               key={ imagen.id }
               {...imagen} />
              ))
            }
        </div>
    </>

  )
}
