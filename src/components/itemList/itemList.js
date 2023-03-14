import Contador from '../Contador/Contador.js'
import Item from '../Item/item'
import './ItemList.scss'


export const ItemList = ( {items} ) => {
    
    return (

        <div className="cuadrante">
             <h2 className="text-white text-xl">Listado de productos</h2>
            <hr/>
            
                                   
            <div className="itemCard" > 
                          {items.map((producto) => <Item key={producto.id} item={producto}/>) }
                            

                                
             </div>

        <Contador/>
        </div>

    )
}

