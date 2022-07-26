import React from 'react'

import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <>
      <div className='product-container'>
        <div className='product-container__img'>
          <img src={item.foto} alt=""/>
        </div>
        <div className="product-container__details">
          <h3>{item.nombre}</h3>
          <h4>Categoria: {item.categoria}</h4>
          <h4>Precio: ${item.precio}</h4>
          <h5>{item.descripcion}</h5>
          <h6>Stock: {item.stock}</h6>

        </div>
      </div>
    </>
  )
}

export default ItemDetail