import './Cards.css';
import { useState } from "react";
import { Button, Card} from 'react-bootstrap';

import NoStock from '../NoStock'


function Cards( props ){

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
            <Card.Body>
                <Card.Title className='cardTitle'>Unidades: { props.stock }</Card.Title>
                <Card.Text className='cardText'>
                {props.descripcion}
                </Card.Text>
                <Card.Text className='cardText'>
                $ {props.precio}
                </Card.Text>
                <div className="botones">
                    <Button variant="secondary" size="sm" onClick={restar} >-</Button>
                    <p className="cantidad">{ numero }</p>
                    <Button variant="secondary" size="sm" onClick={sumar} >+</Button>
                </div>
                
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

export default Cards;