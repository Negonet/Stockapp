import { Link } from 'react-router-dom'

const Item = ( {item} ) => {

        return (
            <div className="">
                <div className="m-[20px] max-sm:m-[5px] max-sm:w-[150px] max-w-[250px] max-sm:h-[250px] max-h-[400px] bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                    <Link>
                        <img className="rounded-lg max-sm:w-[120px] mx-auto max-sm:h-[90px] w-[240px] h-[180px]" src={item.img} alt={item.producto}/>
                    </Link>
                    <div className="px-6 max-sm:px-3 max-sm:py-2 mb-0 py-4">  
                        <p className="hidden">{item.id}</p>
                        <div className="font-bold text-gray-700 text-center max-sm:text-lg text-xl mb-2">
                            <h4>{item.producto}</h4>
                        </div>
                        <div className="flex flex-col items-center justify-center">    
                            <p className="text-gray-700 max-sm:text-xs text-base">Cliente: <strong>{item.cliente}</strong></p>
                            <p className="text-gray-700 max-sm:text-xs text-base">Destino: <strong>{item.destino}</strong></p>
                            <p className="text-gray-700 hidden text-base">{item.descripcion}</p>
                            <p className="text-gray-700 hidden text-base">{item.kg}</p>
                            <p className="text-gray-700 max-sm:text-xs text-base">Cantidad: <strong>{item.cajas}</strong></p>
                            <p className="text-gray-700 hidden text-base">Precio unitario: $ <strong>{item.precio}</strong></p>
                            <button className="rounded-lg p-[5px] border-[0.5px] border-gray-400 shadow-lg mx-[10px] mt-[20px] text-xs bg-slate-700 text-gray-300 hover:bg-gray-600 hover:text-white ease-in-out duration-200">
                                <Link to={`/detail/${item.id}`}>
                                    Ver detalle
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default Item
