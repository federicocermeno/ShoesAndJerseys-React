import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import { ItemList } from '../ItemList/ItemList'
import Spinner from '../LoadingSpinner/Spinner'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId) {
          getFetch()
          .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId)))
          .finally(() => { setLoading(false) })
        } else {
          getFetch()
          .then(respuesta => setProductos(respuesta))
          .finally(() => { setLoading(false) })
        }

    },[categoriaId])

    const onAdd = (setAvStock, avStock, count, setDisable) => {
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

 /*  console.log(categoriaId) */
  return (
    <> 
      <p className='item-list__container'>
        {greeting}
      </p>
      <section className='item-list__body'> 
        { loading ? <Spinner /> : <ItemList items={productos} /> }
      </section>
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
      

    </>
  )
}

export default ItemListContainer
