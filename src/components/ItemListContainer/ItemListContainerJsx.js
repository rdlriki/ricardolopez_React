/* Importo Css */
import '../ItemListContainer/ItemListContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';




function ItemListContainerJsx({ greetings }) {
    const { catid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [infoCargada, setInfoCargada] = useState(false)

    const [productos, setProductos] = useState([])

    const db = getFirestore();


    //UTILIZO PROMESAS PARA LEER EL ARCHIVO CON LA INFORMACION DE LOS PRODUCTOS
    //SI VIENE FILTRADO, MUESTRO POR CATEGORIA

    useEffect( () => {

        if (!catid) {
            const productosFirebase = collection(db, "PruebaPiguarte")
            getDocs(productosFirebase).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
            })
        } else {
            const productosFirebase = query(collection(db, "PruebaPiguarte"), where("categoria", "==", catid))
            getDocs(productosFirebase).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
            })
        }
        setInfoCargada(true)
        setIsLoading(false)
    }, [ catid ] );

    return (
        <div className="contenedor">
            {!isLoading && (<h3 className="saludoInicial">{greetings}</h3>)} {/* Imprimo el saludoInidial */}
            {isLoading && (<h3>Cargando...</h3>)}
            {infoCargada && <ItemList listadoProductos={productos} />} {/* Llamo el ItemList */}
        </div>
    );
}

export default ItemListContainerJsx;