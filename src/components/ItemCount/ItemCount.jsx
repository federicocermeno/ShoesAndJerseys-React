import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
    
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleSubstract = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        if (count < stock) {
            onAdd(count)
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
            <br />
            <button onClick={handleAddToCart} >
                Agregar al carrito
            </button>
        </div>
    );
}
