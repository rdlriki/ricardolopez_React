import './ItemListContainer.css';

function ItemListContainer( { greetings } ) {
    return (
    <div className='ItemListContainer'>
        <hr></hr> {/* solo la uso para separar el texto */}
        <p> Esto lo llaman desde "{ greetings }" en App</p>
    </div>
    )
}

export default ItemListContainer;

