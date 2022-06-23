import './Cards.css';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards() {
    return (
/*         <div>
            <Card>
            <Card.Header>Aqui muestro el Ejemplo</Card.Header>
            <Card.Body>
                <Card.Title>El número es</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div> */
    <div className='card'>
        <h4>Producto</h4>
        <p>Descripcion</p>
    </div>
    ) 
}

export default Cards;