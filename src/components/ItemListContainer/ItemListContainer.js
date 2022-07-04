/* Importo Css */
import '../ItemListContainer/ItemListContainer.css';

/* Importo componentes */
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ greetings }) {

    /* UseStates para leer info del JSON */
    const [productos, setProductos] = useState([])

    /* Leo el JSON */
    useEffect(() => {
        setTimeout( /* Genero un tiempo de 2s simulando leer de una base de datos */
            () => {
                fetch('piguarte.json',  /* Leo el JSON */
                    /* Sino coloco el HEADERS, no lee el JSON */
                    {
                        headers:
                        {
                            'Content-Type': 'application/json',
                            'Accept': 'application/son'
                        }
                    }
                )
                    .then(resp => resp.json())
                    .then(data => setProductos(data))   /* Guardo los datos en Productos */
                    .catch(err => console.log(err))
            }, 2000)
    }, []);

    return (
        <div className="contenedor">
            <p className="saludoInicial">{greetings}</p>    {/* Imprimo el saludoInidial */}
            <ItemList listadoProductos={productos} />   {/* Llamo el ItemList */}
        </div>
    )
}
export default ItemListContainer;