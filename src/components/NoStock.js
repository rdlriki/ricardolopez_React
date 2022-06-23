import './NoStock.css'

function NoStock({numero, stock}){
    console.log(numero, stock)
    if (numero == stock){
        return(
            <div>
                <p className="noStock">No hay mas stock!</p>
            </div>
        )
    }
    if (numero == 0){
        return(
            <div>
                <p className="carritoVacio">Su carrito esta vacío!</p>
            </div>
        )
    }
}

export default NoStock;