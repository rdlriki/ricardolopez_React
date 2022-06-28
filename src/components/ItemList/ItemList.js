import React from "react";
import Item from '../Item/Item'
import { Container, Row} from 'react-bootstrap';

function ItemList({listadoProductos}) {

/*     console.log('listadoProductos',listadoProductos)
 */
    return (

        <Container fluid >
            <Row>
                {listadoProductos.map((comida) => <Item 
                    producto={comida.producto} 
                    stock={comida.stock} 
                    precioG={comida.precioG} 
                    precioC={comida.precioC} 
                    descripcion={comida.descripcion} 
                    key={comida.id} 
                    img={comida.img} 
                    categoria={comida.categoria} /> )}
            </Row>
        </Container>
    )
}

export default ItemList;