import './ItemListContainer.css';
/* import ItemCount from "./ItemCount"
import Cards from "./Cards" */
import ItemList from './ItemList';

function ItemListContainer( { greetings } ) {
    return (
    <div className='ItemListContainer'>
        <hr></hr> {/* solo la uso para separar el texto */}

        <h2>Nuestro Menu</h2>
        <p>Elegi nuestras especialidades</p>
        <ItemList />

{/*         <p> Esto lo llaman desde "{ greetings }" en App</p>
        <ItemCount stock={5} inicial={1}/>
        <Cards />
 */}    </div>
    )
}

export default ItemListContainer;

