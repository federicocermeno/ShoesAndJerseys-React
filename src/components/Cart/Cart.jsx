import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.css";


const Cart = () => {
  const { cartList, cartEmpty, removeItem, totalPrice, totalQuantity } = useCartContext();

  const [orderId, setOrderId] = useState("");

  const [itemsCarro, setItemsCarro] = useState(true)

  

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
    <div className="globaldiv">
      <h1>Carrito</h1>
      <div className="cart-items">
        <div className='quantity-items'>
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
                <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar producto</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPrice() == 0 ? (
        <div className="empty-cart">
          <h4>El carrito esta vacio</h4>
          <Link to="/" className="back-button">
            <Button variant="secondary">Volver a la lista</Button>
          </Link>
        </div>
      ) : (
        <div className="otro">
          <CheckoutForm saveOrder={saveOrder} />
          <div className="cart-info">
          <h5>Precio total: </h5>
          <h5>${totalPrice()}</h5>
          
          {/* <button onClick={saveOrder}>Comprar</button> */}
           <Button variant="outline-danger" onClick={cartEmpty}>Vaciar carrito</Button>
        </div>
        </div>

      )}
      {orderId !== "" && <h4>{`Su ID de compra es: ${orderId} `}</h4>}
    </div>
  );
};

export default Cart;
