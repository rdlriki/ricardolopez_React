import './ItemListContainer.css';
import ItemCount from "./ItemCount"

function ItemListContainer( { greetings } ) {
    return (
    <div className='ItemListContainer'>
        <hr></hr> {/* solo la uso para separar el texto */}
        <p> Esto lo llaman desde "{ greetings }" en App</p>
        <ItemCount stock={5} inicial={1}/>
    </div>

    )
}

export default ItemListContainer;

