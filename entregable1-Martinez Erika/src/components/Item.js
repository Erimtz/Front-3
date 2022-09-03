import { useState } from 'react';

export default function Item({cantidad, nombre, descripcion, stock}) {
    
    const [counter, setCounter] = useState(stock)

    const handleSubstract = () => {
        setCounter(counter-1)
        cantidad()
    }  
    return (
      <div className='producto'>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <h5> En stock : {counter > 0 ?  counter : <span> agotado </span>} </h5>
            <button disabled={counter <= 0} onClick={handleSubstract}>{counter > 0 ? 'Comprar' : 'Sin stock'}</button>
      </div>
    )
  }