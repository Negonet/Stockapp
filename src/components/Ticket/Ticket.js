import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"


export const Ticket = () => {
    
    const [ ticketData, setTicketData] = useState([])
    const [loading, setLoading] = useState(true)

    const { ticketId } = useParams()
         
    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, "Ordenes de compras", ticketId)
        
        getDoc(docRef)
            .then((doc) => {
             
                setTicketData({
                    
                    id: doc.id,
                    ...doc.data()
                })
            }) 
            .finally(() => setLoading(false))
            
    }, [ticketId])
    
    return (
        <div>
            <div className="w-full sm:mb-[90px] max-sm:mb-[60px]">
                <div className=" h-30 max-sm:mt-[20px] mt-[50px] items-center bg-slate-50 mx-auto rounded-lg max-sm:max-w-[330px] max-w-[900px] shadow-lg">
                    <h2 className="text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Ticket </h2>
                </div>
                { loading 
                    ?   <p className="text-gray-100 text-center mt-4 text-base">Cargando Documento...</p>
                    :   <div className="grid mx-auto mt-3 max-sm:mx-auto max-sm:w-[400px] max-w-[900px] place-items-center">
                            <div className="my-[20px] max-sm:p-1 mx-auto max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">  
                                <div className="p-0">  
                                    <p className="hidden"></p>
                                    <div className="grid mx-1 sm:w-[600px] grid-cols-2 font-base text-gray-700 mb-2">
                                        <div className="row-start-1 flex">
                                            <img src='/imgs/logo2.jpg' alt='logo' className="rounded-lg h-[60px] w-[60px]" />
                                            <p className="absolute ml-2 left-[72px] top-6 text-2xl font-lobster text-white">
                                            Stockapp.
                                            </p>
                                        </div>
                                        <div className="cols-start-2 relative">
                                            <p className="absolute text-gray-200 right-0 top-4 text-xs">Fecha: {ticketData.fecha}</p>
                                            <p className="absolute text-gray-100 right-0 top-10 text-xs">Ticket <span className="max-sm:hidden">N°:</span> <span className="text-gray-300 text-xs">{ticketId}</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-5 h-auto">
                                        <ul className=" text-gray-200 max-sm:text-xs text-base row">
                                            <li className="text-gray-100">
                                            Datos de Facturacion
                                            </li>
                                            <hr className="w-[150px] max-sm:w-[120px] mb-3"/>
                                            <li className="text-gray-100">
                                                Cliente | <span className="text-gray-400">{ticketData.cliente.nombre}</span>
                                            </li >
                                            <li className="text-gray-100">
                                                Direccion | <span className="text-gray-400">{ticketData.cliente.direccion}</span>
                                            </li>
                                            <li className="text-gray-100">
                                                E-mail | <span className="text-gray-400">{ticketData.cliente.email}</span>
                                            </li>
                                            <li className="text-gray-100">
                                                Telefono | <span className="text-gray-400">{ticketData.cliente.telefono}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="max-sm:px-0 px-0 py-5 mt-10 max-sm:mt-5 sm:w-[600px] sm:mx-auto relative max-sm:mx-0 mx-auto overflow-x-auto max-sm:w-[390px] shadow-xl w-[500px]">
                                        <table className="w-full rounded-xl text-sm text-left text-gray-400">
                                            <thead className="text-[10px] border-b-[0.1px] border-gray-500 text-gray-400 uppercase bg-gray-500 ">
                                                <tr className="bg-gray-700 max-sm:text-gray-400">
                                                    <th scope="col" className="rounded-tl-lg text-center max-sm:px-3 px-5 py-1">
                                                    Prod<span className="max-sm:hidden">ucto</span>
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
                                            ticketData.items.map((item) => {
                                                
                                                return (
                                                <tr key={item.id} className="border-b-[0.1px] text-[11px] bg-[#222327] border-gray-500">
                                                    <th scope="row" className="px-3 py-4 sm:text-center font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                                        {item.nombre}
                                                    </th>
                                                    <td className="px-2 text-center py-2">
                                                        {item.destino}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {item.cliente}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        $ {item.precio}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {item.cantidad}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {item.kgCaja * item.cantidad}
                                                    </td>
                                                    <td className="px-2 max-sm:px-1 text-center py-2">
                                                        $ {item.kgCaja * item.precio * item.cantidad}
                                                    </td>
                                                </tr>
                                                )})
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
                                                    {ticketData.itemsQ} | 
                                                    </td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                                    {ticketData.totalKg} |
                                                    </td>
                                                    <td className="px-0 max-sm:text-sm max-sm:mr-1 text-center rounded-r-lg text-gray-800 font-bold text-base py-2">
                                                        ${ticketData.totalBuy}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <hr className="h-1 mx-auto mt-5 mb-1 bg-gray-200 border-0 rounded"/>
                                    <Link className="justify-between" to='/'>
                                    <button className="bg-green-600 py-[2px] px-[5px] max-sm:mb-2 mt-4 mx-[10px] rounded-md text-gray-100 border-[0.1px] border-gray-300 hover:bg-green-500 hover:text-gray-700 ease-in-out duration-300">Finalizar</button>
                                    <button className="bg-slate-700 py-[2px] px-[5px] mt-4 mx-[10px] rounded-md text-gray-400 hover:bg-slate-600 shadow-lg border-[0.1px] border-gray-600 hover:text-white ease-in-out duration-300">Imprimir</button>
                                    </Link>
                                </div>
                            </div>
                        
                }
            </div>
        </div>
    )
}