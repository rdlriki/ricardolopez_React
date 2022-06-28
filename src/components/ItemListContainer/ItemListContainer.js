import React, { useEffect, useState } from 'react';
//import { listadoProductos } from './Data/data';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';

function ItemListContainer({ greetings }) {

    const [productos, setProductos] = useState([])
    
    useEffect( () =>{
        setTimeout( 
            ()=>{
                fetch('data.json', 
                    {
                        headers : 
                        {
                        'Content-Type': 'application/json',
                        'Accept': 'application/son'
                        }
                    }
                    )
                    .then(resp=>resp.json())
                    .then(data=>setProductos(data))
                    .catch(err=>console.log(err))
                    }, 2000 )
    }, [] );

    console.log("Productos: ", productos)
/*
    //const [info, setInfo] = useState([])

    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { listadoProductos.length > 0 ? resolve(listadoProductos) : reject("No hay datos") }, 2000);
        }
        )
    }
 
    useEffect(() => {
        getProductos()
            .then((res) => setProductos(res))
            .catch((err) => console.log(err))
    }, [])

     */

    //console.log(productos)

    return (
        <div className="contenedor">
            <p className="saludoInicial">{greetings}</p>
            <ItemList listadoProductos={productos} />
        </div>
    )
}
export default ItemListContainer;