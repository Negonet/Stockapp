import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../context/CartContex"
import { db } from "../../firebase/config"
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"





export const Ticket = () => {
    
    const {cart, purchaseDone, tBuy, tKg, itemQuantity} = useContext(CartContext)
    const [ ticketData, setTicketData] = useState([])
    //const [loading, setLoading] = useState(true)

    const {ticketId} = useParams()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    //console.log(ticketId)

    useEffect (() => {
       

        const docRef = doc(db, "Ordenes de compras", ticketId)
        
        getDoc(docRef)
            .then((doc) => {
                //console.log(doc.id)
                //console.log(doc.data())
                //console.log(doc.data().cliente.nombre)
                
                setTicketData({
                    
                    id: doc.id,
                    ...doc.data()
                })
            }) 
            
    }, [])
    
   console.log(ticketData)

    return (
        <div className="w-full lg:mb-[90px] max-sm:mb-[60px]">
            <div className=" h-30 max-sm:mt-[20px] mt-[50px] items-center bg-slate-50 mx-auto rounded-lg max-sm:max-w-[330px] max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Ticket </h2>
            
            </div>
            <div className="grid mx-auto mt-3 max-sm:mx-auto max-sm:w-[400px] max-w-[900px] place-items-center">
                <div className="my-[20px] max-sm:p-1 mx-auto max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">  
                    <div className="p-0">  
                        <p className="hidden"></p>
                        <div className="grid mx-1 sm:w-[600px] grid-cols-2 grid-rows-2 font-base text-gray-700 mb-2">
                            <div className="row-start-1 flex">
                                <Link><img src='./imgs/logo.png' alt='logo' className="rounded-lg h-[60px] w-[60px]" /></Link>
                                <p className="ml-2 text-white">
                                
                                   
                                    
                                </p>
                            </div>
                            <div className="cols-start-2 relative">
                                <p className="absolute text-gray-100 right-2 text-xs">Ticket N°: <span className="text-gray-300 text-xs">{ticketId}</span></p>
                            </div>
                            
                            <ul className="row-start-2 text-gray-200 max-sm:text-xs text-base row h-20">
                                <li>
                                {/* {ticketData.id} */}
                                </li>
                                <li>

                                {/* {ticketData.cliente.direccion} */}
                                </li>
                                <li>
                                {/* {ticketData.cliente.email} */}
                                </li>
                                <li>
                                {/* {ticketData.cliente.telefono} */}
                                </li>
                            </ul>
                            
                        </div> 
                        <div className="max-sm:px-0 px-0 py-5 mt-5 sm:w-[600px] sm:mx-auto relative max-sm:mx-0 mx-auto overflow-x-auto max-sm:w-[390px] shadow-xl w-[500px]">
                            <table className="w-full rounded-xl text-sm text-left text-gray-400">
                                <thead className="text-[10px] border-b-[0.1px] border-gray-500 text-gray-400 uppercase bg-gray-500 ">
                                    <tr className="bg-gray-700 max-sm:text-gray-400">
                                        <th scope="col" className="rounded-tl-lg text-center max-sm:px-3 px-5 py-1">
                                            Producto
                                        </th>
                                        <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                            Destino
                                        </th>
                                        <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                            Mercado
                                        </th>
                                        <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                            Precio unit
                                        </th>
                                        <th scope="col" className="text-center px-0 py-1">
                                            Cajas
                                        </th>
                                        <th scope="col" className="text-center smax-sm:px-2 px-2 py-1">
                                            Kg
                                        </th>
                                        <th scope="col" className="rounded-tr-lg text-center max-sm:px-1 px-2 py-1">
                                            Valor total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                            {
                                cart.map((prod) => (
                                    <tr key={prod.id} className="border-b-[0.1px] text-[11px] bg-gray-800 border-gray-500">
                                        <th scope="row" className="px-3 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                            {prod.producto}
                                        </th>
                                        <td className="px-2 text-center py-2">
                                            {prod.destino}
                                        </td>
                                        <td className="px-2 text-center py-2">
                                            {prod.cliente}
                                        </td>
                                        <td className="px-2 text-center py-2">
                                            $ {prod.precio}
                                        </td>
                                        <td className="px-2 text-center py-2">
                                            {prod.counter}
                                        </td>
                                        <td className="px-2 text-center py-2">
                                            {prod.kg * prod.counter}
                                        </td>
                                        <td className="px-2 max-sm:px-1 text-center py-2">
                                            $ {prod.kg * prod.precio * prod.counter}
                                        </td>
                                    </tr>
                                ))
                            }
                                    <tr className="bg-gray-700 shadow-xl h-5">
                                    <td className="rounded-bl-lg"></td><td></td><td></td><td></td><td></td><td></td><td className="rounded-br-lg"></td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    
                                    <tr className="bg-gray-300">
                                        <td className="rounded-l-lg"></td><td></td><td></td>
                                        <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                            Totales
                                        </td>
                                        <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                        {itemQuantity()} | 
                                        </td>
                                        <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                        {tKg()} |
                                        </td>
                                        <td className="px-0 max-sm:text-sm max-sm:mr-1 text-center rounded-r-lg text-gray-800 font-bold text-base py-2">
                                            ${tBuy()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <hr className="h-1 mx-auto mt-5 mb-1 bg-gray-200 border-0 rounded"/>
                        <Link className="justify-between" to='/'>
                        <button className="bg-green-600 py-[2px] px-[5px] max-sm:mb-2 mt-4 mx-[10px] rounded-md text-gray-100 border-[0.1px] border-gray-300 hover:bg-green-500 hover:text-white ease-in-out duration-300" onClick={purchaseDone}>Finalizar</button>
                        <button className="bg-slate-700 py-[2px] px-[5px] mt-4 mx-[10px] rounded-md text-gray-400 hover:bg-slate-600 shadow-lg border-[0.1px] border-gray-600 hover:text-white ease-in-out duration-300">Imprimir</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}