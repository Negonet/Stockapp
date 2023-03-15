import { Link, useNavigate } from "react-router-dom"
import Contador from "../Contador/Contador"






const ItemDetail = ({ item }) => {


    const navigate = useNavigate()

    const handleVolver = () => {

        navigate("/ItemListContainer")
    }
       

    return (

        <div className="card bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                                        
                                        <Link>
                                            <img className="rounded-lg" src={item.img} alt={item.name}/>
                                        </Link>
                                        <div className="px-6 py-4">  
                                            <p className="hidden">{item.id}</p>
                                            <div className="font-bold text-gray-700 text-xl mb-2">
                                                <h4>{item.producto}</h4>
                                            </div>
                                                
                                            <p className="text-gray-700 text-base">Cliente: {item.cliente}</p>

                                            <p className="text-gray-700 text-base">Destino: {item.destino}</p>
                                
                                            <p className="text-gray-700 hidden text-base">Peso Total:{item.kg} kg</p>

                                            <br/>
                                            
                                            <p className="text-gray-700 text-base">{item.descripcion}</p>

                                            <br/>
                                    
                                            <p className="text-gray-700 text-base">Cantidad: {item.cajas}</p>


                                            <p className="text-gray-700 text-base">Precio unitario: $ {item.precio}</p>

                                            <Contador/>

                                            <button onClick={handleVolver} className="btn_detalle p-2 rounded-lg">Volver</button>

                                        </div>
            
                                        

                                        

        
        </div>

    )
}


export default ItemDetail