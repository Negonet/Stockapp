
import './item.scss'


const Item = ( {item} ) => {

        return (
            <div className="flex">
            <div className="card bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                                        
                                        <img className="rounded-lg" src={item.img} alt={item.name}/>
                                        <div className="px-6 py-4">  
                                        <p className="hidden">{item.id}</p>
                                        <div className="font-bold text-gray-700 text-xl mb-2">
                                            <h4>{item.producto}</h4>
                                        </div>
                                            
                                        <p className="text-gray-700 text-base">Cliente: {item.cliente}</p>

                                        <p className="text-gray-700 text-base">Destino: {item.destino}</p>
                            
                                        <p className="text-gray-700 hidden text-base">{item.kg}</p>
                                
                                        <p className="text-gray-700 text-base">Cantidad: {item.cajas}</p>
                                        
                                        <button className="btn_detalle rounded-lg">Ver detalle</button>
                                        </div>
                                    
                                </div>
                                </div>
        )

}

export default Item
