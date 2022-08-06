import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
/* import { doc, getDoc, getFirestore } from 'firebase/firestore' */
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState({})

    const {prodId} =  useParams() 
    /* console.log(prodId) */

    useEffect(() => {
        getFetch(prodId)
        .then(resp => setItemProduct(resp))
    }, [])

    /* useEffect(() => {
      const db = getFirestore()
      const queryProducto = doc(db, 'productos', '5cWotK3vFDCOLCp0Rh4T' )
      getDoc(queryProducto)
      .then(resp => setItemProduct( {id: resp.id, ...resp.data()}))
    },[]) */
    

  return (
    <div>
        <ItemDetail item={itemProduct}/>
    </div>
  )
}

export default ItemDetailContainer