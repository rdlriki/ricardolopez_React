/* Importo Css */
import '../ItemListContainer/ItemListContainer.css';
import { piguarte } from '../Piguarte/piguarte';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainerJsx({ greetings }) {
    const { catid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [infoCargada, setInfoCargada] = useState(false)

    const [productos, setProductos] = useState([])
    
    //UTILIZO PROMESAS PARA LEER EL ARCHIVO CON LA INFORMACION DE LOS PRODUCTOS
    //SI VIENE FILTRADO, MUESTRO POR CATEGORIA
    useEffect(() => {
        setIsLoading(true)
        const getProductos  = new Promise ( (resolve) => {
            setTimeout(() => {
                const myData = catid 
                    ? piguarte.filter(product => product.categoria === catid)
                    : piguarte; 
                    
                    
                resolve(myData);
                    
                }, 2000);
        });

        getProductos.then(res => setProductos(res))
        getProductos.catch(err => console.log(err))
        .finally(() => {
            setInfoCargada(true)
            setIsLoading(false)
        })

    }, [catid]);

    return (
        <div className="contenedor">
            {!isLoading && (<h3 className="saludoInicial">{greetings}</h3>)} {/* Imprimo el saludoInidial */}
            {isLoading && (<h3>Cargando...</h3>)}
            {infoCargada && <ItemList listadoProductos={productos} />} {/* Llamo el ItemList */}
            
        </div>
    );
}

export default ItemListContainerJsx;