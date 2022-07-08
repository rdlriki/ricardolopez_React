/* Importo Css */
import './ItemDetailContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row , Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    /* Declaro el UseState para producto(FETCH) y para un*/
    /* condicional para que me renderice el detalle */
    const [producto, setProducto] = useState([]);
    const [infoCargada, setInfoCargada] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {productoid} = useParams();

    useEffect(() => {
        if (productoid){

            setTimeout(
                () => {
                   /*  fetch('piguarte.json', */
                    fetch('piguarte.json',

/*                         {
                            method: "GET",
                            headers:
                            {
                                'Content-Type': 'application/json',
                                'Accept': 'application/son'
                            }
                        } */
                    )
                        .then(resp => resp.json())
                        .then(data => setProducto(data.filter( i => i.id === productoid)))
                        .finally( ()=> {
                            setInfoCargada(true)
                            setIsLoading(false)
                        }) 
                        .catch(err => console.log(err))
                }, 1000 )
        }
    }, [productoid]);

    return (

        <div className='body'>
            <Container>
                <Row>
                    <Col className="colPadding">
                        {isLoading && (<h3>Cargando detalle...</h3>)}

                        {/* Con este condicional, siendo verdadero, renderizo */}
                        {infoCargada && <ItemDetail itemDetalle={producto} />}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default ItemDetailContainer;