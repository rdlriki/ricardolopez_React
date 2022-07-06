/* Importo Css */
import '../ItemListContainer/ItemListContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer({ greetings }) {

    /* UseStates para leer info del JSON */
    const [productos, setProductos] = useState([]);
    const { catid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [infoCargada, setInfoCargada] = useState(false)

/*     console.log(catid);
 */
    useEffect(() => {
        setIsLoading(true)
        if (catid) {
/*             console.log("arriba")
 */            setTimeout(
                () => {
                    fetch('../piguarte.json',
                        {
                            method: "GET",
                            headers:
                            {
                                'Content-Type': 'application/json',
                                'Accept': 'application/son'
                            }
                        }
                    )
                        .then(resp => resp.json())
                        .then(dataFiltrada => {
                            setProductos(dataFiltrada.filter(product => product.categoria === catid))
                            setIsLoading(false)
                            setInfoCargada(true)
                        })
                        .catch(err => console.log(err))
                        
                }, 1000)
        }

        else {
/*             console.log("aca")
 */            setTimeout(
                () => {
                    fetch('../piguarte.json',
                        {
                            method: "GET",
                            headers:
                            {
                                'Content-Type': 'application/json',
                                'Accept': 'application/son'
                            }
                        }
                    )
                        .then(resp => resp.json())
                        .then(data => {
                            setProductos(data)
                            setIsLoading(false)
                            setInfoCargada(true)
                        })
                        .catch(err => console.log(err))
                }, 1000)
            }
    }, [catid]);

    return (
        <div className="contenedor">
            {!isLoading && (<h3 className="saludoInicial">{greetings}</h3>)} {/* Imprimo el saludoInidial */}
            {isLoading && (<h3>Cargando...</h3>)}
            {infoCargada && <ItemList listadoProductos={productos} />} {/* Llamo el ItemList */}
            
        </div>
    )
}
export default ItemListContainer;