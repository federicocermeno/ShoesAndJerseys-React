import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState({})

    const {prodId} =  useParams() 
    /* console.log(prodId) */

    /* useEffect(() => {
        getFetch(prodId)
        .then(resp => setItemProduct(resp))
    }, []) */

    useEffect(() => {
      const db = getFirestore()
      const queryProducto = doc(db, 'productos', prodId )
      getDoc(queryProducto)
      .then(response => setItemProduct( {id: response.id, ...response.data()}))
    },[])
    

  
  return (
    <div>
        <ItemDetail item={itemProduct}/>
    </div>
  )
}

export default ItemDetailContainer