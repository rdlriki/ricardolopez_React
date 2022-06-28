import React from "react";
import './Item.css';
import { useState } from "react";
import { Button, Card} from 'react-bootstrap';
import NoStock from '../NoStock/NoStock'

function Item(props) {

    //console.log(props.producto)

    const [ numero , setNumero ] = useState( 1 )

    const sumar = () => {
        if (numero < props.stock) {
            setNumero ( numero+1 )
        } 
    }
    
    const restar = () => {
        if (numero > 0){
            setNumero ( numero-1 )
        }
    }

    const reiniciar = () => {
        setNumero ( 1 )
    }

    return (
        <div className="cards">
        
            <Card className="alinearCard">
            <Card.Header>{ props.producto }</Card.Header>
            <Card.Body className="cardBody">
                <Card.Title className='cardTitle'>Unidades: { props.stock }</Card.Title>
                <img 
                    alt="{props.producto}"
                    src={props.img}
                    //src={require("../Assets/Img/Pizza_Muzzarella.jpg")}
                    //src={require('../Assets/Img/$(props.img)')}
                    height="100"
                    width="auto"
                    className="d-inline-block align-top me-2 rounded shadow bg-white rounded"
                />{' '}
                <Card.Text className='cardText'>
                {props.descripcion}
                </Card.Text>
                <Card.Text className='cardPrecio'>
                Grande: $ {props.precioG} / Chica: $ {props.precioC}
                </Card.Text>
                <div className="botones">
                    <Button variant="secondary" size="sm" onClick={restar} >-</Button>
                    <p className="cantidad">{ numero }</p>
                    <Button variant="secondary" size="sm" onClick={sumar} >+</Button>
                    
                </div>
                <NoStock numero={numero} stock={props.stock}></NoStock>
            </Card.Body>
                <div className="carritoReiniciar">
                    <Button variant="danger" >Agregar al Carrito</Button>
                    <Button variant="primary" onClick={reiniciar}>Eliminar items</Button>
                </div>
            </Card>

        </div>
/*     <div className='card'>
        <h4>Producto</h4>
        <p>Descripcion</p>
    </div> */
    ) 
}

export default Item;