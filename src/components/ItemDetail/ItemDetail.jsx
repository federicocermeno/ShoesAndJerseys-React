import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";

const ItemDetail = ({ item }) => {
  const [itemCard, setItemCard] = useState(true);
  const { addToCart, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    setItemCard(false);
    addToCart({ ...item, cantidad: cantidad });
  };

  return (
    <div className="container" id="cont">
      <div className="row">
        <div className="col-md-5">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.foto2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.foto3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.foto4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-7">
          <p className="newarrival ">NEW</p>
          <h2>{item.nombre}</h2>
          <p>Product Code: ISRC2018</p>
          <p className="price">Precio: ${item.precio}</p>
          <p>
            Condición: <strong>EN STOCK ({item.stock})</strong>{" "}
          </p>
          <p>Categoria: {item.categoria}</p>

          {itemCard ? (
            <>
              <p>Cantidad:</p>
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </>
          ) : (
            <Link to="/cart" className="finish-button">
              <Button variant="success" className="button-finish">
                Terminar mi compra
              </Button>
            </Link>
          )}
          <div className="back-button_div">
            <Link to="/" className="back-button">
              <Button variant="outline-secondary">Volver a la lista</Button>
            </Link>
          </div>
          <br/>
          <p><b>Descripción</b></p>
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
