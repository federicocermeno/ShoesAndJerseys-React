import carrito from '../../../bag.svg'
import './CartWidget.css'

import {FaCartPlus} from "react-icons/fa"

export const CartWidget = () => {
  return (
    <div>
      
      <a href='https://facebook.com' target={'_blank'} className='cart__container'>
        <i> <FaCartPlus size="30px" className='cart__container-icon' /></i>
      </a>
    </div>
  )
}

