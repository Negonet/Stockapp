
import './itemListContainer.scss'


const ItemListCointainer = ( {greeting} ) => {
    
    
    return (
        <div className='listado__items'>
            <h2>Listado de producto</h2>
            <hr/>
            {greeting}
        </div>
    )
}

export default ItemListCointainer