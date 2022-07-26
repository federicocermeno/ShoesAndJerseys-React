import React from "react";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="product-container">
        <div className="border">
          <div className="product-container__img">
            <img src={item.foto} alt="" />
          </div>
          <div className="product-container__details">
            <h3>{item.nombre}</h3>
            <h4>Categoria: {item.categoria}</h4>
            <h4>Precio: ${item.precio}</h4>
            <h5>{item.descripcion}</h5>
            <h6>Stock: {item.stock}</h6>

            <Link to='/' className="back-button">
              <Button variant="secondary">Volver a la lista</Button>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ItemDetail;
