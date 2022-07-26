import React, { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'

import {useParams} from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState([])

    const {prodId} =  useParams() 
    console.log(prodId)

    useEffect(() => {

        getFetch(prodId)
        .then(resp => setItemProduct(resp))
    }, [])


    
  return (

    <div>
        <ItemDetail item={itemProduct}/>
    </div>
  )
}

export default ItemDetailContainer