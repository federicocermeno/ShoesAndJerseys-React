import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState({})

    const {prodId} =  useParams() 
  

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