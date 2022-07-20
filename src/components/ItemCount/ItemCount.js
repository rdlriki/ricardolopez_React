//IMPORTO LOS ELEMENTOS
import { Button, Card, Container } from "react-bootstrap"
import { useState } from 'react'

//IMPORTO COMPONENTE
import Mensaje from "../Mensaje/Mensaje";


function ItemCount(props) {

    //Creo estado para guardar las cantidades elegidas
    const [numero, setNumero] = useState(1);
    const [carritoVacio, setCarritoVacio] = useState(false);

    //Guardo las props para compartir
    const { onAdd } = props;

    /* Funcion sumar */
    const sumar = () => {
        if (numero < props.stock) {
            setNumero(numero + 1)
            setCarritoVacio(false)

        }
    }

    /* Funcion restar */
    const restar = () => {
        if (numero > 0) {
            setNumero(numero - 1)
            console.log(numero)
        }
        if (numero === 1) {
            setCarritoVacio(true)
        } else {
            setCarritoVacio(false)
        }

    }

    /* Funcion REINICIAR en valor incial, o sea: 1 */
    const reiniciar = () => {
        setNumero(1)
        setCarritoVacio(false)

    }

    //Al apretar el boton, guardo el valor dentro de INPUT como evanto el valor ingresado
    const guardar = (event) => setNumero(event.target.value);

    //Paso a onAdd el valor de la cantidad elegida
    const addToCart = () => {
        onAdd(numero)
    }

    return (
        <Container>
            <Card>
                <Card.Body className='bodyCard'>
                    <div className="input-group mb-1 ">
                        <Button onClick={restar} className="input-group-text">-</Button>
                        <input type="text" className="form-control" value={numero} onChange={guardar} />
                        <Button onClick={sumar} className="input-group-text">+</Button>
                    </div>

                    {carritoVacio ? (
                        <Button className="buttonCarrito" disabled variant="secondary" onClick={addToCart}>Agregar al carrito</Button>
                    ) : (
                        <Button className="buttonCarrito"  variant="danger" onClick={addToCart}>Agregar al carrito</Button>
                    )
                    }
                </Card.Body>
                <Button variant="primary" className="buttonCarrito" onClick={reiniciar}>Reiniciar</Button>
            </Card>
            <div className='mensaje'>
                <Mensaje numero={numero} stock={props.stock}></Mensaje>
            </div>
        </Container>
    );
}

export default ItemCount;