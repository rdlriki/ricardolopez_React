/* Importo Css */
import './ItemDetailContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row , Col } from 'react-bootstrap';


function ItemDetailContainer() {
    /* Declaro el UseState para producto(FETCH) y para un*/
    /* condicional para que me renderice el detalle */
    const [producto, setProducto] = useState([]);
    const [infoCargada, setInfoCargada] = useState(false)

    useEffect(() => {
        /* Le doy un tiempo de 1s */
        setTimeout(
            () => {
                /* Leo el JSON */
                fetch('piguarte.json',
                /* Sin el Headers no funciona el FETCH */
                    {
                        headers:
                        {
                            'Content-Type': 'application/json',
                            'Accept': 'application/son'
                        }
                    }
                )
                    .then(resp => resp.json()) /* Luego de la respuesta */
                    .then(data => { /* Busco con Filter el Id===1 y lo guardo en Producto*/
                        setProducto(data.filter( i => i.id === 11))
                        setInfoCargada(true)}) /* Genero esta bandera para que me renderice */
            }, 1000 )
        
    }, []);

/*     console.log(producto) 
 */
    return (

        <div className='body'>
            <Container>
                <Row>
                    <Col className="colPadding">
                        {/* Con este condicional, siendo verdadero, renderizo */}
                        {infoCargada && <ItemDetail itemDetalle={producto} />}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default ItemDetailContainer;