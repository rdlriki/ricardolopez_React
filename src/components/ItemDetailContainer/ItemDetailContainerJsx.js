/* Importo Css */
import './ItemDetailContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProducto } from '../Assets/Services/firestore';


function ItemDetailContainerJsx() {
    const [producto, setProducto] = useState([]);
    const [infoCargada, setInfoCargada] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { productoid } = useParams();


    useEffect(() => {
        
            getProducto(productoid)
            .then((res) => setProducto(res))
            .catch((err) => console.log(err))
            .finally(() => {
                setInfoCargada(true) 
                setIsLoading(false)
            })
            

    }, [productoid]);


    return (

        <div className='body'>
            <Container>
                <Row>
                    <Col className="colPadding">
                        {isLoading && (<h3>Cargando detalle...</h3>)}
                        {/* {console.log("productos", productos)}
                        {console.log("producto", producto)} */}
                        {/* Con este condicional, siendo verdadero, renderizo */}
                        {infoCargada && <ItemDetail itemDetalle={producto} />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetailContainerJsx;