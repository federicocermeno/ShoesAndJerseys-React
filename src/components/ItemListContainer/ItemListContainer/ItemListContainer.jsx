import React from 'react'
import { useState, useEffect} from 'react'
import { getFetch } from '../../../helpers/getFetch'
import ItemCount from '../../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'
import Spinner from '../LoadingSpinner/Spinner'

import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .finally(() => { setLoading(false) })
        
    },[])

  return (
    <> 
      <p className='item-list__container'>
        {greeting}
      </p>
      <section className='item-list__body'> 
        { loading ? <Spinner /> : <ItemList items={productos} /> }
      </section>
      <ItemCount stock={10} initial={1}/>
    </>
  )
}

export default ItemListContainer