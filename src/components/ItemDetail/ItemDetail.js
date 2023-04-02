import { Link, useNavigate } from "react-router-dom"
import Contador from "../Contador/Contador"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContex"


const ItemDetail = ({ item }) => {

    const {addToCart, isInCart} = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {

        navigate(-1)
    }

    const handleAddCart = () => {
        const itemToCart = {
            ...item,
            counter
            
        }
        
        addToCart (itemToCart)

    }
 
    return (
      
        <div className="mb-20 max-sm:mb-10 bg-white/10 border-[0.5px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg max-w-[800px] p-2 rounded-lg overflow-hidden shadow-lg"> 
            <div className="sm:grid sm:grid-cols-2 gap-4 px-2 py-2">  
                <div className="cols-start-1 max-sm:items-center max-sm:flex max-sm:flex-cols max-sm:justify-center">
                    <img src={item.img} alt={item.producto} className="rounded-lg w-[400px] h-auto" /> 
                </div>
                <div className="max-sm:mt-4 cols-start-2">
                    <p className="hidden">{item.id}</p>
                    <div className="font-bold text-gray-100 text-xl mb-2">
                        <h4>{item.producto}</h4>
                    </div>
                    <p className="text-gray-200 text-base">Cliente: <strong>{item.cliente}</strong></p>
                    <p className="text-gray-200 text-base">Destino: <strong> {item.destino}</strong></p>
                    <br/>
                        <p className="text-gray-200 text-base">Breve reseña : {item.descripcion}</p>
                    <br/>
                    <div>
                        <p className="text-gray-200 text-base">Kg por caja: <strong>{item.kg} kg</strong></p>
                        <p className="text-gray-200 text-base">Cantidad de cajas: <strong>{item.cajas}</strong></p>
                        <p className="text-gray-200 text-base">Precio por Kg: $ <strong>{item.precio}</strong></p>
                    </div>
                    <hr className="mt-4 sm:hidden"/>
                    <br/>
                </div>
            </div>
            <div className="mx-[5px] mb-2 max-w-[800px] bg-white/10 border-[0.1px] sm:grid sm:grid-cols-2 border-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                <div className="col-start-2 flex flex-col items-center justify-center">
                <p className="text-xl font-bold text-gray-100 mb-4">
                Esta compra
                </p>
                <p className="text-gray-300 text-base">Total kg: <strong>{item.kg * counter} kg</strong></p>
                <p className="text-gray-300 text-base">Cantidad: <strong>{counter}</strong></p>
                <p className="text-gray-300 text-base">Esta Venta: $ <strong>{item.precio * item.kg * counter}</strong></p>
                </div>
                <div className="flex flex-col items-center justify-center row-start-1 mt-0">
                    {
                        
                        isInCart(item.id) 
                        ?   <div className="mt-5">
                                <Link to="/cart" className="rounded-lg p-[5px] border-[0.1px] shadow-lg border-gray-500 mx-[10px] my-[5px] bg-slate-700 text-gray-400 hover:bg-gray-600 hover:text-white ease-in-out duration-200">
                                    Terminar mi compra
                                </Link>
                            </div>
                        :   <div className="flex flex-col items-center justify-center">
                                <p className="mt-5 text-gray-100 font-bold">
                                    Agregar al carrito
                                </p>
                                <Contador 
                                max={item.cajas}
                                counter={counter}
                                setCounter={setCounter}
                                handleAddCart={handleAddCart}
                                />
                            </div>
                    }
                <br/>
                <button onClick={handleVolver} className="bg-slate-700 py-[2px] px-[5px] mt-4 mx-[10px] border-[0.1px] border-gray-500 rounded-md text-gray-400 shadow-lg hover:bg-slate-600 hover:text-white ease-in-out duration-300">Volver</button>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail