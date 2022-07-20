import React from 'react'

const Item = ({item}) => {

  return (
    <div className="card" style={{width: "18em", display:"block"}} key={item.id} >
         <img src={item.foto} className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{item.nombre}</h5>
           <p className="card-text">{item.descripcion}</p>
           <a href="#" className="btn btn-primary">Agregar al carrito</a>
         </div>
       </div>
  )
}

export default Item