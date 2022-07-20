import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({items}) => {
  return (
    <>
      {
         items?.map( items => <Item item={items} key={items.id}/>)
        }
    </>
  )
}
