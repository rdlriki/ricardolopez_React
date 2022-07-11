import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Carrito.css';


const Carrito = () => {

    return (
        <Container className='contenedorCarrito'>
            <div className='comingSoon'>Próximamente</div>
            <Link to={`/`}>
                <img
                    alt=""
                    src={require('../Assets/Img/Coming_soon.jpg')}
                    width="100%"
                    height="auto"
                    className="m-auto"
                />{' '}
            </Link>
        </Container>
    );
}

export default Carrito;
