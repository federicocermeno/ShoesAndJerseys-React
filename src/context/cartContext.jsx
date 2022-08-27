import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import 'animate.css';

const CartContext = createContext([])
export const useCartContext = () =>  useContext(CartContext)

/* Library for customized alerts */
const eraseAlert = Swal.mixin({
    position: 'top-end',
    showConfirmButton: false,
    timer: 1200,
    showClass: {
        popup: 'animate__animated animate__backInRight animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__backOutRight'
      },
    timerProgressBar: 'true',
    toast: true
})

const eraseAllAlert = Swal.mixin({
    position: 'top-end',
    showConfirmButton: false,
    timer: 1600,
    showClass: {
        popup: 'animate__animated animate__backInRight animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__backOutRight'
      },
    timerProgressBar: 'true',
    toast: true
})

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (productInCart) => {

        const isIncart = cartList.findIndex(product => product.id == productInCart.id)

        if (isIncart != -1) {
            cartList[isIncart].cantidad += productInCart.cantidad
            setCartList([ ...cartList ])

        } else {
            setCartList([
                ...cartList,
                productInCart
            ])
        } 
    } 

    const cartEmpty = () => {
        setCartList([])
        eraseAllAlert.fire({
            icon: 'info',
            title: 'Eliminaste todos los productos del carrito.'
        })
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id != id))
        eraseAlert.fire({
            icon: 'info',
            title: 'Producto eliminado con exito'
          })
    }

    const totalPrice = () => {
        return cartList.reduce((totalPrice, initialPrice) => totalPrice += (initialPrice.precio * initialPrice.cantidad), 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((counter, productObject) => counter += productObject.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            cartEmpty,
            removeItem,
            totalPrice,
            totalQuantity
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider