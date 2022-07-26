/* Importo Css */
import './ItemDetail.css';

/* Importo componentes */
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail(props) {

    /*     console.log("ItemDetail", props)
     */    /* guardo props en Producto para trabajarlo mejor */
    const producto = props.itemDetalle;

    //Comparto por useContext el addToCart al CartContext
    const { addToCart } = useContext(CartContext);

    //Defino la cantidad de items seleccionado
    const [cantCart, setCantCart] = useState(0);

    //Flag que utilizo para mostrar el boton de AGREGAR CARRITO o el COUNTER
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    //Al apretar el boton, se carga a CantCart el valor del counter, se cambia flag del PurchaseCompleted y se comparte el Producto(objeto) y la cantidad al addToCart
    const onAdd = (cantidad) => {
        setCantCart(cantidad);
        setPurchaseCompleted(true);
        addToCart(producto, cantidad);
    }

    //Muestro en consola la cantidad del counter
    console.log("La cantidad del producto agregado es: ", cantCart)


    return (
        <div>
            <Container>
                <Row>
                    <Col lg>
                        <Carousel variant="dark" className='imagenPrincipal'>
                            <Carousel.Item className='imagenPrincipal' >
                                <img
                                    className="d-block"
                                    src={producto.img1}
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
                                    src={producto.img2}
                                    alt="{producto.descripcion}"
                                />

                                <Carousel.Caption>
                                    <h3>{producto.producto}</h3>
                                    <p>{producto.descripcion}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='productoDescripcion' lg>
                        <Container>
                        
                            {/* Aca hago 5 filas para mostrar informacion */}
                            <Row>   {/* Fila de categoria */}
                                <Col>
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
                                    <h2 className='stock'>Unidades en Stock: {producto.stock}</h2>

                                </Col>
                            </Row>

                            {/* ACA MUESTRO EL COUNTER Y EL BOTON DE IR A CARRITO DE ACUERDO AL FLAG PURCHASECOMPLETED */}


                            <Row className="justify-content-center">    {/* Botoneras */}
                                <Col xs={7}>
                                    {!purchaseCompleted &&
                                        <Col className="mt-3">
                                            <ItemCount className="itemCount" inicial="1" stock={producto.stock} onAdd={onAdd} />
                                        </Col>
                                    }
                                </Col>
                            </Row>
                            <div className='addCarrito'>
                                {purchaseCompleted &&
                                    (<Row>

                                        <Col className="mt-3">
                                            <Link to={"/cart"}>
                                                <Button className="float-end boton" size="sm" variant="success">Ir a Carrito</Button>
                                            </Link>
                                            </Col>

                                        <Col className="mt-3">
                                            <Link to={"/"}>
                                                <Button className="float-end boton" size="sm" variant="dark">Seguir Comprando</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                    )

                                }
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetail;