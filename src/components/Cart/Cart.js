import { useContext } from "react"
import { CartContext } from "../context/CartContex"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, tBuy, tKg, itemQuantity, emptyCart, removeItemFromCart } =useContext(CartContext)

    return (

        <div className="sm:mt-[50px] mb-[100px]">
            <div className=" h-30 max-sm:mt-[40px] mt-[50px]  max-sm:mb-[10px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Tu compra</h2>
            </div>
            <div className="mx-auto bg-no-repeat bg-cover bg-center bg-[url('/public/imgs/bg-08.jpg')] h-fit-content rounded-lg sm:w-[700px] lg:w-[1000px]">
                <div className="grid md:grid-cols-2 sm:mt-[100px] mx-auto max-w-[900px] place-items-center">
                    <div className="my-[20px] mx-0 max-w-[300px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                        {
                            cart.map((prod) => (
                                <div key={prod.id} className="p-2 flex flex-col items-center justify-center max-w-[200px]">  
                                    <p className="hidden">{prod.id}</p>
                                    <div className="font-bold justify-between text-gray-100 flex pl-5 text-xl mb-2">
                                        <h4 className="pr-5">{prod.producto}</h4><button className="text-gray-400 hover:text-gray-200 duration-300" onClick={() => removeItemFromCart(prod.id)}><BsFillTrashFill/></button>
                                    </div>
                                    <p className="text-gray-300 text-base">Cliente: <strong>{prod.cliente}</strong></p>
                                    <p className="text-gray-300 text-base">Destino: <strong> {prod.destino}</strong></p>
                                    <div className="flex flex-col items-center justify-center mb-1">
                                        <p className="text-gray-300 pt-4 text-base">Cajas compradas: <strong>{prod.counter}</strong></p>
                                        <p className="text-gray-300 text-base">Precio por Kg: <strong>$ {prod.precio},00</strong></p>
                                        <p className="text-gray-300 text-base">Kg totales: <strong>{prod.kg * prod.counter} kg</strong></p>
                                        <p className="text-gray-300 text-base">Valor total: <strong>$  {prod.kg * prod.precio * prod.counter},00</strong></p>
                                    </div>
                                    <hr className="h-1 px-20 mx-auto mt-2 mb-1 border-0 rounded bg-gray-700"/>
                                </div>
                            ))
                        }
                    </div>                
                    <div className="m-[20px] w-[300px] max-h-[400px] bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 max-w-[300px] py-4 flex flex-col items-center justify-center">  
                            <p className="hidden"></p>
                            <p className="text-gray-700 text-base"><strong>Estimado Cliente:</strong></p>
                            <br/>
                            <p className="text-gray-700 text-center text-base"> A continuacion se detalla el resumen de su compra<strong> </strong></p>
                            <br/>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-gray-700 pt-8 text-base">Son Cajas: <strong>{itemQuantity()}</strong> | Peso: <strong>{tKg()} kg</strong></p>
                                <p className="text-gray-700 text-base">Valor total: <strong>$ {tBuy()},00</strong></p>
                            </div>
                            <hr className="h-1 mx-auto mt-8 mb-1 bg-gray-200 border-0 rounded md:my-3 dark:bg-gray-700"/>
                            <div className="mt-4 flex flex-col items-center justify-center">
                            <Link to="/Checkout">
                                <button className="bg-green-700 py-[2px] px-[5px] mt-0 mx-[10px] my-2 rounded-md text-gray-900 hover:bg-green-600 hover:text-gray-300 ease-in-out duration-200">
                                    Abonar
                                </button>
                            </Link>
                            <Link to="/ItemListContainer">
                                <button className="bg-green-700 py-[2px] px-[5px] mt-0 mx-[10px] my-2 rounded-md text-gray-900 hover:bg-green-600 hover:text-gray-300 ease-in-out duration-200">
                                    Seguir comprando
                                </button>
                            </Link>

                            <Link to="/">
                                <button onClick={emptyCart} className="bg-red-700 py-[2px] px-[5px] mt-0 mx-[10px] rounded-md text-gray-900 hover:bg-red-800 hover:text-gray-200 ease-in-out duration-200">
                                    Cancelar Compra
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Cart