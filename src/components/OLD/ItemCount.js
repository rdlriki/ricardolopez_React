import { useState } from "react";
import Mensaje from "./Mensaje"
import Button from 'react-bootstrap/Button';
import NoStock from './NoStock'
import './ItemCount.css'


function ItemCount( {stock, inicial}){
    const [ numero , setNumero ] = useState( inicial )
    
    const sumar = () => {
        if (numero < stock) {
            setNumero ( numero+1 )
        } 
    }
    
    const restar = () => {
        if (numero > 0){
            setNumero ( numero-1 )
        }
    }

    const reiniciar = () => {
        setNumero ( inicial )
    }

    return(
        <div>
            <p className="stock">El stock es: {stock}</p>
            <Mensaje numero={numero}></Mensaje>
            <Button variant="primary ms-1" onClick={sumar}>Sumar </Button>{' '}
            <Button variant="success ms-1" onClick={restar}>Restar </Button>{' '}
            <Button variant="danger ms-1" onClick={reiniciar}>Reiniciar </Button>{' '}
            <NoStock numero={numero} stock={stock}></NoStock>
        </div>
    )


}

export default ItemCount;