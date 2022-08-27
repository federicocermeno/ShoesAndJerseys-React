import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import "animate.css";

const successAlert = Swal.mixin({
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  showClass: {
    popup: "animate__animated animate__backInRight animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__backOutRight",
  },
  timerProgressBar: "true",
  toast: true,
});

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleSubstract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count < stock) {
      onAdd(count);
      successAlert.fire({
        icon: "success",
        title: "Producto agregado al carrito",
      });
    }
  };

  return (
    <div className="handle-cart">
      <div className="cart-buttons">
        <button onClick={handleSubstract}>
          <FaMinus />
        </button>
        <p>{count} </p>
        <button onClick={handleAdd}>
          <FaPlus />
        </button>
      </div>
      <br />
      <Button variant="success" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
}
