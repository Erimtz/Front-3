import React from 'react';
import data from './data.json';
import Item from './Item';

export default function Listado({cantidad}) {
  return (
    <div className='container'>
        {data.map((item )=> {
            return ( 
            <Item
                            key={item.id}
                            cantidad={cantidad}
                            nombre={item.producto.nombre}
                            descripcion={item.producto.descripcion}
                            stock={item.stock} 
                            />
                            );
                         })}    
    </div>
  )
}