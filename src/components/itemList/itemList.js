import Contador from '../Contador/Contador.js'
import Item from '../Item/item'
import './ItemList.scss'
import { Link } from 'react-router-dom'

export const ItemList = ( {items} ) => {
    
    return (

        <div className="">
                <div className=" h-30 items-center bg-slate-50 p4 shadow-lg">
                <h2 className=" text-gray-700 p-2 shadow-lg font-mono text-center text-3xl">Listado de productos</h2>
                
                <div className="flex items-center">
                    <h2 className="text-gray-700 pl-6 text-center text-xl">Filtrar por:</h2>
                    <button className="rounded-lg"><Link to="/products/menudencia"><p>Menudencia</p></Link></button>
                    <button className="rounded-lg"><Link to="/products/corte"><p>Cortes</p></Link></button>
                </div>
                </div>
               
               
            <hr/>
            
                                   
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:items-center itemCard"> 
                          {items.map((producto) => <Item key={producto.id} item={producto}/>) }
                            

                                
             </div>

        
        </div>

    )
}

