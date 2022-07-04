/* Importo Css */
import './ItemDetail.css';

/* Importo componentes */
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Mensaje from '../Mensaje/Mensaje';


function ItemDetail(props) {

    /* como props es un array, lo guardo en producto que es un ojeto */
    const producto = props.itemDetalle[0];

    /* UseState para hacer la logica para sumar y restar items para el carrito */
    const [numero, setNumero] = useState(1)

    /* Funcion sumar */
    const sumar = () => {
        if (numero < producto.stock) {
            setNumero(numero + 1)
        }
    }

    /* Funcion restar */
    const restar = () => {
        if (numero > 0) {
            setNumero(numero - 1)
        }
    }

    /* Funcion REINICIAR en valor incial, o sea: 1 */
    const reiniciar = () => {
        setNumero(1)
    }

    return (
        <div>
            <Container>
                {/* Genero 3 columnas: fotito chiquita, foto grande principal, info del producto */}
                <Row>
                    {/* Primer columna: fotitos */}
                    <Col md={2}>
                        <ul>
                            <li className='imagenThumbail'>
                                <img src={require(`../Assets/Img/${producto.img2}`)} alt={producto.producto} style={{ width: '100%' }} />
                            </li>
                        </ul>
                    </Col>

                    {/* Segunda columna: Foto grande */}
                    <Col md={6}>
                        <div className='imagenPrincipal'>
                            <img src={require(`../Assets/Img/${producto.img1}`)} alt={producto.producto} style={{ width: '100%' }} />
                        </div>
                    </Col>

                    {/* Tercera columna: Datos del producto */}
                    <Col className='productoDescripcion'>
                        <Container>

                            {/* Aca hago 5 filas para mostrar informacion */}
                            <Row>   {/* Fila de categoria */}
                                <Col xs={10}>
                                    <h2 className='categoria'>{producto.categoria}</h2>
                                </Col>
                            </Row>

                            <Row>   {/* Nombre del Producto */}
                                <Col>
                                    <h1>{producto.producto}</h1>
                                </Col>
                            </Row>

                            <Row>   {/* Detalle del producto */}
                                <Col>
                                    <p>{producto.detalle}</p>
                                </Col>
                            </Row>

                            <Row>   {/* Precio del producto */}
                                <Col>
                                    <div className='precio'>Precio: ${producto.precio}</div>
                                </Col>
                            </Row>
                            
                            <Row className="justify-content-center">    {/* Botoneras */}
                                <Col xs={7}>
                                    <Card>
                                        <Card.Body className='bodyCard'>
                                            <div class="input-group mb-1 ">
                                                <button onClick={restar} className="input-group-text">-</button>
                                                <input type="text" class="form-control" value={numero} />
                                                <button onClick={sumar} className="input-group-text">+</button>
                                            </div>
                                            <Button className="buttonCarrito">Agregar al carrito</Button>
                                        </Card.Body>
                                        <Button variant="primary" className="buttonRestart" onClick={reiniciar}>Reiniciar</Button>
                                        <div className='mensaje'>
                                            <Mensaje numero={numero} stock={producto.stock}></Mensaje>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetail;