import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBoostrap() {
    return (
        <Navbar bg="light" expand="lg" >
        <Container>
            <img 
                alt=""
                src={require('../Assets/Img/PyE.jpg')} 
                width="60"
                height="auto"
                className="d-inline-block align-top me-2 rounded shadow bg-white rounded"
                />{' '}
                
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Pizzas y Empanadas</Nav.Link>
                <Nav.Link href="#link">Promociones</Nav.Link>
                <NavDropdown title="Cocina" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Empanadas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Calzones</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                    Bebidas
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Limite Delivery</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <img 
                alt=""
                src={require('../Assets/Img/cartImg.png')} 
                width="30"
                height="auto"
                className="d-inline-block align-text-bottom me-2 rounded"
                />{' '}
        </Container>
        </Navbar>
    );
    }

    export default NavbarBoostrap;