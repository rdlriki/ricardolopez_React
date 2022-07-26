import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Nostock() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Ups!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>No hay stock, lo sentimos</Modal.Body>
                <Modal.Footer>
                    <Link to={"/"}>
                    <Button variant="secondary" onClick={handleClose}>Volver
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Nostock;