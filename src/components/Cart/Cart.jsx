import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.css";
import { Col, Container, Row, Card, CardGroup } from "react-bootstrap";

const Cart = () => {
  const { cartList, cartEmpty, removeItem, totalPrice, totalQuantity } =
    useCartContext();

  const [orderId, setOrderId] = useState("");

  //guardar la orden en base de datos
  const saveOrder = (e, buyerData) => {
    e.preventDefault();

    const order = {};
    order.buyer =
      buyerData; /* {email:'example@gmail.com', name:'federico', phone:'123123123'} */

    order.items = cartList.map((prod) => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio,
      };
    });

    order.total = totalPrice();

    //guardar orden en base de datos
    const db = getFirestore();
    const queryOrders = collection(db, "orders");
    addDoc(queryOrders, order)
      .then((resp) => setOrderId(resp.id))
      .finally(cartEmpty());
  };

  return (
    <Container>
      <h1>Carrito</h1>
      <Row>
        <Col sm={6}>
          <div className="quantity-items">
            <h5>Cantidad de items: {totalQuantity()}</h5>
          </div>
          {cartList.map((item) => (
            <div key={item.id}>
              <div className="displayflexdiv">
                <div className="w-50">
                  <img src={item.foto} className="w-50" />
                </div>
                <div>
                  <p>{item.nombre}</p>
                  <p>Cantidad:{item.cantidad}</p>
                  <p>Subtotal: ${item.precio * item.cantidad}</p>
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    Eliminar producto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Col>

        {totalPrice() == 0 ? (
          <div className="empty-cart">
            <h4>El carrito esta vacio</h4>
            <Link to="/" className="back-button">
              <Button variant="secondary">Volver a la lista</Button>
            </Link>
          </div>
        ) : (
          <Col sm={6} >
            <CheckoutForm saveOrder={saveOrder} />
            <h5>Precio total: </h5>
            <h5>${(totalPrice()).toFixed(1)}</h5>
            <Button variant="outline-danger" onClick={cartEmpty}>
              Vaciar carrito
            </Button>
          </Col>
        )}
        {orderId !== "" && <h4>{`Su ID de compra es: ${orderId} `}</h4>}
      </Row>
    </Container>
  );
};

export default Cart;
