import Item from '../Item/item'

import { Link } from 'react-router-dom'

export const ItemList = ( {items} ) => {
    
    return (

        <div className="">
                <div className=" h-30 items-center max-sm:mt-[40px] max-sm:mb-[10px] bg-slate-50  mx-auto rounded-lg max-sm:w-[330px] p4 shadow-lg">
                <h2 className=" text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Listado de productos</h2>
                
                <div className="flex text-[15px] justify-center items-center">
                    <h2 className="text-gray-700 pl-6 text-center max-sm:text-sm text-base">Filtrar por:</h2>
                    <button className="rounded-lg p-[5px] mx-[10px] my-[10px] bg-slate-700 text-gray-300 hover:bg-gray-600 text-xs border-[0.5px] border-gray-500 shadow-lg hover:text-white ease-in-out duration-200"><Link to="/products/menudencia"><p>Menudencia</p></Link></button>
                    <button className="rounded-lg p-[5px] mx-[10px] my-[10px] bg-slate-700 text-gray-300 hover:bg-gray-600 text-xs border-[0.5px] border-gray-500 shadow-lg hover:text-white ease-in-out duration-200"><Link to="/products/corte"><p>Cortes</p></Link></button>
                </div>
                </div>
               
               
            
                                   
            <div className="grid lg:grid-cols-3 max-sm:grid-cols-2 place-items-center md:grid-cols-2 items-center"> 
                          {items.map((producto) => <Item key={producto.id} item={producto}/>) }
                            

                                
             </div>

        
        </div>

    )
}

