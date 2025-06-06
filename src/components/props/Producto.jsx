import React from 'react'
import './producto.css'

const Producto = ({productoName, productoPrecio, productoDescrip}) => {
  return (
    <div className="cntProducto">
        <h3>Productos</h3>
        <p>Nomnbre de producto: {productoName}</p>
        <p>Precio: {productoPrecio}</p>
        <p>Descripcion: {productoDescrip}</p>
    </div>
  )
}
export default Producto
