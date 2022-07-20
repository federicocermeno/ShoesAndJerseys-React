import React, {useState} from "react"
import './ItemCount.css'

export default function ItemCount({stock, initial}) {
    const [count, setCount] = useState(parseInt(initial) )
    const [avStock, setAvStock] = useState(parseInt(stock))
    const [disable, setDisable] = useState(false) //handle del boton "agregar al carrito"
    //console.log(AvStock)
    
    const handleAdd = () => {
        setCount(count + 1)
        
        if (count == stock) {
            console.log(`Lo maximo que podes llevar son ${stock} productos`)
            setCount(count) //para que no pueda sumar mas que el stock indicado
        }
    }

    const handleSubstract = () => {
        setCount(count - 1)

        if (count <= 1) {
            setCount(count)
            console.log('No es logico tener 0 productos! ¿En que pensas?')
        }
    }

    const onAdd = () => {
        setAvStock(avStock - count) //cuando se suma un producto al carro,se resta uno del stock

        if(avStock >= count) {
            if (count == 1 && avStock >= count) {
                console.log(`Se ha agregado ${count} producto al carrito`)
            }
            if (count > 1 && avStock >= count) {
                console.log(`Se han agregado ${count} productos al carrito`)
            }
            console.log(`Quedan ${avStock - count} productos disponibles`)
        } 
        if (avStock <= count) {
            console.error('No stock')
            setDisable(true) //deshabilitar boton
        }
    }
    return (
      <div className="handle-cart">
        <h3>Item name</h3>
            <div className="cart-buttons">
                <button onClick={handleSubstract}>-</button>
                <p>{count} </p>
                <button onClick={handleAdd}>+</button>
            </div>
          <br/>
          <button onClick={onAdd} disabled={disable}>Agregar al carrito</button>
      </div>
    )
}