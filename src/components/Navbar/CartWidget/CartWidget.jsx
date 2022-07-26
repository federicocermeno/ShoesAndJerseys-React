import './CartWidget.css'
import {FaCartPlus} from "react-icons/fa"

export const CartWidget = () => {
  return (
    <div>
        <i> <FaCartPlus size="30px" className='cart__container-icon' /></i>
    </div>
  )
}

