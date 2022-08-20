import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";


const Cart = () => {

  const { cartList, cartEmpty,removeItem, totalPrice  } = useCartContext()
  const [orderConfirmation, setOrderConfirmation] = useState(false)
  const [orderId, setOrderId] = useState('')

  //guardar la orden en base de datos
  const saveOrder = (e) => {
    e.preventDefault()

    const order = {}
    order.buyer = {email:'example@gmail.com', name:'federico', phone:'123123123'}
    order.items = cartList.map(prod => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio
      }
    })

    order.total = totalPrice()

    //guardar orden en base de datos
    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then(resp => setOrderId(resp.id))
    .finally(setOrderConfirmation(true))
  }
  
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map(item => (
          <li key={item.id}>
            <div className="w-25">
              <img src={item.foto} className='w-50'/>
            </div>
            {item.nombre} - {item.stock} - {item.cantidad} - Subtotal: ${item.precio * item.cantidad}
            <button onClick={() => removeItem(item.id)}>X</button>
          </li>        
        ))}
      </ul>
      {totalPrice() == 0 ? 
        <>
          <h4>El carrito esta vacio</h4>
          <Link to='/' className="back-button">
            <Button variant="secondary">Volver a la lista</Button>
          </Link>
        </>
        :
        <>
          <h4>Precio total : ${totalPrice()}</h4>
        {/* <button onClick={saveOrder}>Comprar</button> */}
          <button onClick={cartEmpty} id='hola'>Vaciar carrito</button>
        </>
      }
      <form>
        <input type="submit" value="Submit" onClick={saveOrder}/>
      </form>
      <section>
        <h4>
          {orderConfirmation? `Orden colocada. Su ID es: ${orderId} ` : ''}
        </h4>
      </section>
    </div>
  )
}

export default Cart