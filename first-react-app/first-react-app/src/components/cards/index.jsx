import React from 'react'
import ProTypes from "prop-types"

const Cards = ({products}) => {
    console.log(products)
  return (
    <ul>
        {products.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
  )
}
Cards.prototypes={
    products:ProTypes.array
}
export default Cards