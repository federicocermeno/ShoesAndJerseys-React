import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Cart = () => {

  const { cartList, cartEmpty,removeItem, totalPrice  } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map(item => (
          <li key={item.id}>
            <div className="w-25">
              <img src={item.foto} className='w-50'/>
            </div>
            {item.nombre} - {item.stock} - {item.cantidad} - Subtotal: {item.precio * item.cantidad}
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
        <h4>Precio total : ${totalPrice()}</h4>
      }
      <button onClick={cartEmpty}>Vaciar carrito</button>
    </div>
  )
}

export default Cart