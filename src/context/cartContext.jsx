import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (productInCart) => {

        const isIncart = cartList.findIndex(product => product.id == productInCart.id)

        if (isIncart != -1) {
            cartList[isIncart].cantidad += producto.cantidad
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
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id != id))
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