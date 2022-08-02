import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../components/Context/CartContext';
import "./Nodatos.css";

function Nodatos() {
    const [show, setShow] = useState(true);
    const { noIngresoDato } = useContext(CartContext);


    const handleClose = () => {
        setShow(false)
        noIngresoDato()
    }

    return (
        <div className="modalNoDatos">
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header className="modalNoDatosHeader">
                    <Modal.Title>Datos incompletos</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalNoDatosBody">Por favor, complete todo el formulario con sus datos.</Modal.Body>
                <Modal.Footer className="modalNoDatosFooter">
                    <Button variant="secondary" onClick={handleClose}>Volver
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Nodatos;