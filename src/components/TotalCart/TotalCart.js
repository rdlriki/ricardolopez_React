/* Importo Css */
import './TotalCart.css';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import CartContext from '../Context/CartContext';
import FinalizarCompra from '../FinalizarCompra/FinalizarCompra';


function TotalCart(props) {

    const { cart } = useContext(CartContext);

    const [mostrar, setMostrar] = useState(false);

    const handlerClose = () => setMostrar(false);
    const handlerFinalizar = () => setMostrar(true);

    //Funcion para mas adelante, para tener la cantidad de items dentro del carrito recorriendo el array
    let unidades = 0;
    cart.map(i => unidades = (unidades + parseInt(i.qty)))

    let total = 0;
    cart.map(i => total = (total + (parseInt(i.item.precio) * parseInt(i.qty))));

    return (
        <>
            <Col>
                <Card className='itemCarrito'>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col className='colTotales'>
                                    <h4>Resumen</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='colTotales'>
                                    <Container>
                                        <Row>
                                            <Col className='totalText'>Unidades:</Col>
                                            <Col className='totalPrecio'> {unidades}</Col>
                                        </Row>
                                        <Row>
                                            <Col className='totalText'>Total:</Col>
                                            <Col className='totalPrecio'>$ {total}</Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='colTotales'>
                                    <Link to="#">
                                        {cart.length !== 0 ?
                                            <Button className="mb-2" size="sm" variant="success" onClick={handlerFinalizar}>Finalizar compra</Button>
                                            :
                                            <Button className="mb-2" size="sm" variant="secondary" disabled>Finalizar compra</Button>
                                        }
                                    </Link>
                                    <Link to="/">
                                        <Button className="mb-2" size="sm" variant="info">Seguir comprando</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
            <FinalizarCompra show={mostrar} handlerClose={handlerClose} />
        </>
    );
}

export default TotalCart;