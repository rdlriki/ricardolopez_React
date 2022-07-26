import "./Modal.css";

import { Form, Modal, Button, Col, Container, Row } from 'react-bootstrap';
import React, { useContext, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";

import CartContext from '../Context/CartContext';

function ModalCierre(props) {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const { cart } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);

    const [oc, setOc] = useState("0");

    const [ contacto , setContacto] = useState(false);

    let total = 0;
    cart.map(i => total = (total + (parseInt(i.item.precio) * parseInt(i.qty))));

    const db = getFirestore();

    const finalizarCompra = () => {
        const compra = {
            "buyer": {
                "name": name,
                "surName": surName,
                "email": mail,
                "phone": phone
            },
            "items": cart,
            "date": Date.now(),
            "total": total
        };
        try {
            addDoc(collection(db, "oc"), compra)
                .then(({ id }) => setOc(id))

        } catch (err) {
            console.error("Hubo un error: ", err);
        }

        for (const element of cart){
            const producto = doc(db, "PruebaPiguarte", element.item.id)
            updateDoc(producto, { stock: element.newStock})
        }

        clearCart();

        setContacto(!contacto);
    }


    return (
        <Modal
            show={props.show} onHide={props.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Finalizar compra
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {contacto === false ?
                    <Form>
                        <Form.Group className="mb-3" controlId="Nombre">
                            <Row>
                            <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" className="text" placeholder="Ingrese su Nombre" onChange={(event) => setName(event.target.value)} />
                            {console.log(name)}
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Col>
                            <Col>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" className="text" placeholder="Ingrese su Apellido" onChange={(event) => setSurName(event.target.value)} />
                            {console.log(surName)}
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="text" className="text" placeholder="Ingrese su mail" onChange={(event) => setMail(event.target.value)} />
                            {console.log(mail)}
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Telefono">
                            <Form.Label>Telefono de contacto</Form.Label>
                            <Form.Control type="text" className="text" placeholder="Ingrese su telefono de contacto" onChange={(event) => setPhone(event.target.value)} />
                            {console.log(phone)}
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                    </Form>
                    :
                    <Container>
                        <Row>
                            <Col>
                                <p className="mensajeFinal"> Muchas gracias <strong>{name} {surName}</strong> por confiar en PiguArte. En unos minutos le estaremos enviando un mail a <strong>{mail}</strong> con la confirmación de la compra.</p>
                                <h4>Tome nota, este es su numero de Orden de Compra: <strong style={{ color: "#e12257" }}>{oc}</strong></h4>
                                <h5>Una vez tengamos listo el despacho, le enviaremos enviaremos un mensaje al: <strong>{phone}</strong></h5>
                            </Col>
                        </Row>
                    </Container>
                }

            </Modal.Body>
            <Modal.Footer>
                {contacto === false ?
                    <Link to="#">
                        <Button className="mb-2" size="sm" variant="light" onClick={finalizarCompra} >Finalizar compra</Button>
                    </Link>
                    :
                    <Link to="/">
                        <Button className="mb-2" size="sm" variant="dark"  >Cerrar</Button>
                    </Link>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCierre;