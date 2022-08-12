import React from 'react';
import ReactDOM from 'react-dom';

const items = [BobEsponja, PatricioStar];

const Prueba = items.map((item) => 
    <React.Fragment>
        <h1>Bob Esponja</h1>
        <p>Patricio Star</p>
    </React.Fragment>
);

ReactDOM.render(
    <>{Prueba}</>,
    document.getElementById('root')
);