import './index.css';
import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [counter, setCounter] = useState(0)

  const cantidad = () => {
    setCounter(counter +1)
} 
return (
    <div className="App">
      <Cabecera counter={counter} />
      <Listado cantidad={cantidad} />
    </div>
  );
}

export default App;
