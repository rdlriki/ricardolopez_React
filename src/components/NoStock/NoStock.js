import './NoStock.css'

function NoStock({numero, stock}){
    if (numero === stock){
        return(
            <div>
                <p className="noStock">No hay mas stock!</p>
            </div>
        )
    }
    if (numero === 0){
        return(
            <div>
                <p className="carritoVacio">No comprará esto</p>
            </div>
        )
    }
}

export default NoStock;