import React, { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CartContext from '../Context/CartContext';



function NavbarBoostrap() {

    const { cart } = useContext(CartContext);

    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Link to={`/`}>
                    <img
                        alt=""
                        src={require('../Assets/Img/Piguarte_Logo.png')}
                        width="60"
                        height="auto"
                        className="d-inline-block align-top me-2 rounded shadow bg-white rounded"
                    />{' '}
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to='/'>Tienda OnLine PiguArte</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/Muniecas'>Muñecas</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/Muniecos'>Muñecos</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/Letras'>Letras</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavbarBoostrap;