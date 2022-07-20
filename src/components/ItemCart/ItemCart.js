import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCart.css';
 

import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

function ItemCart() {
    //Me traer el carrito, la funcion clear y remove del CartContext
    const { cart, clearCart, removeFromCart } = useContext(CartContext);

/*     const producto = props.producto;
 */
    return (
        <Col >
            <Card className='itemCarrito'>
                <Container>
                    <Row >
                        <Col>
                            <div className='clearCart'>
                                {cart.length !== 0 ? 
                                <Button variant="danger" size="sm" onClick={clearCart}>Limpiar carrito</Button>
                                :
                                <Button variant="secondary" size="sm" onClick={clearCart} disabled>Limpiar carrito</Button>
                                }
                            </div>
                        </Col>
                    </Row>
                    {cart.length !== 0 ? cart.map(i =>
                        <Row className='carrito'>
                            <Col xs={3} className="imagen">
                                <img src={i.item.img1} alt={i.item.producto} className="imageThumb" />
                            </Col>
                            <Col xs={6} className="detalle">
                                <h5 className='titulo'><strong>{i.item.producto}</strong></h5>
                                <p className='categoria'>{i.item.categoria}</p>
                                <div className="unidades">
                                    <div className="col-6 textUnid">
                                        <p className="m-3">Unidades: {i.qty}</p>
                                    </div>
                                </div>
                                <p className='precio'>Precio unitario: ${(i.item.precio)}</p>
                                <p className='precio'>Precio total: ${(i.item.precio * i.qty)}</p>
                            </Col>
                            <Col xs={3}>
                                <span className='favorito'>
                                <Button variant="dark" size="sm" onClick={() => { removeFromCart(i.item.id) }}>Eliminar</Button> 
                                </span>
                            </Col>
                        </Row>
                    )
                        :
                        <Row>
                            <Col>
                                <span className='mb-3 msjVacio'>
                                    Su carrito esta vacío...
                                </span>
                            </Col>
                        </Row>
                    }
                </Container>
            </Card>
        </Col>

    );
}
export default ItemCart;