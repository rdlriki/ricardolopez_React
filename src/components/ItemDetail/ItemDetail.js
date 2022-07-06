/* Importo Css */
import './ItemDetail.css';

/* Importo componentes */
import { Carousel, Button, Card, Col, Container, Row } from 'react-bootstrap';
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

    /*     interval={2000}
     */
    return (
        <div>
            <Container>
                {/* Genero 3 columnas: fotito chiquita, foto grande principal, info del producto */}
                <Row>

                    <Col lg>
                        <Carousel variant="dark" className='imagenPrincipal'>
                            <Carousel.Item className='imagenPrincipal' >
                                <img
                                    className="d-block"
                                    src={require(`../Assets/Img/${producto.img1}`)}
                                    alt="{producto.descripcion}"
                                />
                                <Carousel.Caption >
                                    <h3>{producto.producto}</h3>
                                    <p>{producto.descripcion}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img
                                    className="d-block"
                                    src={require(`../Assets/Img/${producto.img2}`)}
                                    alt="{producto.descripcion}"
                                />

                                <Carousel.Caption>
                                    <h3>{producto.producto}</h3>
                                    <p>{producto.descripcion}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>


                    {/* Tercera columna: Datos del producto */}
                    <Col className='productoDescripcion' lg>
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
                                            <div className="input-group mb-1 ">
                                                <Button onClick={restar} className="input-group-text">-</Button>
                                                <input type="text" className="form-control" value={numero} />
                                                <Button onClick={sumar} className="input-group-text">+</Button>
                                            </div>
                                            <Button className="buttonCarrito">Agregar al carrito</Button>
                                        </Card.Body>
                                        <Button variant="primary" className="buttonRestart" onClick={reiniciar}>Reiniciar</Button>

                                    </Card>
                                    <div className='mensaje'>
                                        <Mensaje numero={numero} stock={producto.stock}></Mensaje>
                                    </div>
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