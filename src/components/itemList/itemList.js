import Contador from '../Contador/Contador.js'
import Item from '../Item/item'
import './ItemList.scss'
import { Link } from 'react-router-dom'

export const ItemList = ( {items} ) => {
    
    return (

        <div className="cuadrante">
             <h2 className="text-white text-xl">Listado de productos</h2>
             <button className="rounded-lg"><Link to="/products/menudencia"><p>Menudencia</p></Link></button>
             <button className="rounded-lg"><Link to="/products/corte"><p>Cortes</p></Link></button>

            <hr/>
            
                                   
            <div className="itemCard" > 
                          {items.map((producto) => <Item key={producto.id} item={producto}/>) }
                            

                                
             </div>

        
        </div>

    )
}

