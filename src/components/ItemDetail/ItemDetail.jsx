import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";



const ItemDetail = ({ item }) => {

  const [itemCard, setItemCard] = useState(true)
  
  const { addToCart, cartList } = useCartContext()

  const onAdd = (cantidad) => {
    console.log(`La cantidad es: ${cantidad}`)
    setItemCard(false) 
    addToCart({...item, cantidad: cantidad})
  }

  console.log(cartList)

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
          {itemCard? 
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            :
            <Link to='/cart' className="back-button">
              <Button variant="secondary">Terminar mi compra</Button>
            </Link>
          }
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
