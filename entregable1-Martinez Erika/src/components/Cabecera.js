import React from 'react'

  export default function Cabecera({counter}) {
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p><span>Cantidad de: {counter}</span></p>   
    </header>
  )
}

