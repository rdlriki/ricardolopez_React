import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import "./Nostock.css";

function Nostock() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <div className="modalNoStock">
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header className="modalNoStockHeader">
                    <Modal.Title>Ups!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalNoStockBody">No hay stock, lo sentimos.</Modal.Body>
                <Modal.Footer className="modalNoStockFooter">
                    <Link to={"/"}>
                    <Button variant="secondary" onClick={handleClose}>Volver
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Nostock;