import './Cart.css';

import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';
import ItemCart from '../ItemCart/ItemCart';
import TotalCart from '../TotalCart/TotalCart';


function Cart() {

    /*  Traigo por Context las funciones de getTotal y getQty.
        De esta forma, al llamar TotalCart, envio el total y la qty deitems y plata en el carrito */


    return (
        <div className='bodyCart'>
            <Container>
                <Row>
                    <Col className="colPadding">
                        <h3 className='pb-4 titulo'>Este es tu carrito</h3>

                        <Container>
                            <Row>
                                <Col md={8} className="contenedorDetalles">
                                    <ItemCart />
                                </Col>
                                <Col md={4} className="contenedorTotal">
                                    <TotalCart />
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Cart;