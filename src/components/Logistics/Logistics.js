import { useSearchParams } from "react-router-dom"
import { Scanner } from "../Scanner/Scanner"
import { BsFillTrashFill, BsFillArchiveFill, BsFillClipboard2CheckFill } from "react-icons/bs"
import { useState } from "react"




export const Logistics = () => {

    const [ showIngresos, setShowIngresos ] = useState(true)

    const handlerView = () => {
        setShowIngresos(!showIngresos)
        }


    return (


        <div className="mb-[100px]">
            <div className=" h-30 max-sm:mt-[40px] max-sm:mb-[10px] my-[40px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Escanear Codigo de Barras & QR</h2>
                <div className="mx-auto flex justify-center my-2">
                    <button onClick={handlerView} className="mx-5 my-2 rounded-md py-1 px-[10px] bg-slate-700 font-bold text-gray-200 ease-in-out duration-300 active:bg-slate-800 shadow-lg hover:bg-slate-600">Cambiar metodo</button>
                </div>
            </div>
            {  !showIngresos
                ?   <div>
                        <div className=" h-30 max-sm:mt-[40px] max-sm:mb-[10px] my-[40px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[500px] shadow-lg">
                                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Egresos</h2>
                        </div>
                        <div className="mx-auto py-5 bg-no-repeat bg-cover bg-center bg-[url('/public/imgs/bg-04.jpg')] h-[800px] rounded-lg sm:w-[700px] lg:w-[1300px]">
                            <div className="grid h-[700px] md:grid-cols-1 lg:grid-cols-4 max-md:grid-cols-1 max-lg:w-[700px] mx-auto max-w-[1250px] max-sm:max-w-[400px] place-items-center">
                                <Scanner/>
                                <div className="my-[10px] col-span-3 mx-0 w-[850px] max-lg:w-[650px] max-sm:max-w-[400px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                                    {/* <div className="max-sm:px-0 px-0 py-5 mt-10 max-sm:mt-5 sm:w-[600px] sm:mx-auto relative max-sm:mx-0 mx-auto overflow-x-auto max-sm:w-[390px] shadow-xl w-[500px]"> */}
                                        <table className="w-full rounded-xl text-sm text-left text-gray-400">
                                            <thead className="text-[10px] border-b-[0.1px] border-gray-500 text-gray-400 uppercase bg-gray-500 ">
                                                <tr className="bg-gray-700 max-sm:text-gray-400">
                                                    <th scope="col" className="rounded-tl-lg text-center max-sm:px-3 px-5 py-1">
                                                    Prod<span className="max-sm:hidden">ucto</span>
                                                    </th>
                                                    <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Cliente
                                                    </th>
                                                    <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Carga
                                                    </th>
                                                    {/* <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Precio unit
                                                    </th> */}
                                                    <th scope="col" className="text-center px-0 py-1">
                                                        Cajas
                                                    </th>
                                                    <th scope="col" className="text-center smax-sm:px-2 px-2 py-1">
                                                        Kg
                                                    </th>
                                                    <th scope="col" className="max-sm:px-0 justify-center items-center px-2 py-1 rounded-tr-lg">
                                                    <BsFillArchiveFill className="text-lg mx-auto"/>
                                                    </th>
                                                    {/* <th scope="col" className="rounded-tr-lg text-center max-sm:px-1 px-2 py-1">
                                                        Valor total
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                        {
                                            //viewCode.map((item) => {
                                                
                                            //   return (
                                                <tr /*key={item.id}*/ className="border-b-[0.1px] text-[11px] bg-[#222327] border-gray-500">
                                                    <th scope="row" className="px-3 py-4 sm:text-center font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                                        {/* {item.nombre} */}
                                                    </th>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.cliente} */}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.destino} */}
                                                    </td>
                                                    {/* <td className="px-2 text-center py-2">
                                                        $ {item.precio}
                                                    </td> */}
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.cantidad} */}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.kgCaja * item.cantidad} */}
                                                    </td>
                                                    <td className="flex flex-cols justify-center items-center py-2">
                                                        <BsFillTrashFill className="text-lg text-red-700 mx-1 active:text-red-400 hover:text-red-500 duration-500"/>
                                                        <BsFillClipboard2CheckFill className=" ml-1 text-lg active:text-green-400 text-green-700 hover:text-green-600 duration-500"/>
                                                    </td>
                                                    {/* <td className="px-2 max-sm:px-1 text-center py-2">
                                                        $ {item.kgCaja * item.precio * item.cantidad}
                                                    </td> */}
                                                </tr>
                                        //     )})
                                        }
                                                <tr className="bg-gray-700 shadow-xl h-7">
                                                    <td className="rounded-bl-lg"></td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2"></td>
                                                    <td>Totales</td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">{/* {ticketData.itemsQ} |  */}</td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">{/* {ticketData.itemsQ} |  */}</td>
                                                    <td className="rounded-br-lg">{/* {ticketData.totalKg} | */}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h-2"></td>
                                                </tr>
                                                    
                                                    
                                                    {/* <td className="px-0 max-sm:text-sm max-sm:mr-1 text-center rounded-r-lg text-gray-800 font-bold text-base py-2">
                                                        ${ticketData.totalBuy}
                                                    </td> */}
                                                
                                            </tbody>
                                            
                                        </table>
                                    {/* </div> */}
                                    <div className="w-full h-10 justify-between items-center flex flex-cols bg-gray-300 rounded-lg">
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg py-1 px-2 active:bg-slate-800 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillTrashFill className="text-lg text-red-700 hover:text-red-500 duration-500 mr-1"/>Destruir pallet</button>
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg py-1 px-2 active:bg-slate-800 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillTrashFill className="text-lg text-red-700 hover:text-red-500 duration-500 mr-1"/>Desarmar pallet</button>
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg py-1 px-2 active:bg-slate-800 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillClipboard2CheckFill className="mr-1 text-lg text-green-700 hover:text-green-600 duration-500"/>Emitir remito</button>                 
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>

                :   <div>
                        <div className=" h-30 max-sm:mt-[40px] max-sm:mb-[10px] my-[40px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[500px] shadow-lg">
                                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Ingresos</h2>
                        </div>
                        <div className="mx-auto py-5 bg-no-repeat bg-cover bg-center bg-[url('/public/imgs/bg-04.jpg')] h-[800px] rounded-lg sm:w-[700px] lg:w-[1300px]">
                            <div className="grid h-[700px] md:grid-cols-1 lg:grid-cols-4 max-md:grid-cols-1 max-lg:w-[700px] mx-auto max-w-[1250px] max-sm:max-w-[400px] place-items-center">
                                <Scanner/>
                                <div className="my-[10px] col-span-3 mx-0 w-[850px] max-lg:w-[650px] max-sm:max-w-[400px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                                    {/* <div className="max-sm:px-0 px-0 py-5 mt-10 max-sm:mt-5 sm:w-[600px] sm:mx-auto relative max-sm:mx-0 mx-auto overflow-x-auto max-sm:w-[390px] shadow-xl w-[500px]"> */}
                                        <table className="w-full rounded-xl text-sm text-left text-gray-400">
                                            <thead className="text-[10px] border-b-[0.1px] border-gray-500 text-gray-400 uppercase bg-gray-500 ">
                                                <tr className="bg-gray-700 max-sm:text-gray-400">
                                                    <th scope="col" className="rounded-tl-lg text-center max-sm:px-3 px-5 py-1">
                                                    Prod<span className="max-sm:hidden">ucto</span>
                                                    </th>
                                                    <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Cliente
                                                    </th>
                                                    <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Carga
                                                    </th>
                                                    {/* <th scope="col" className="text-center max-sm:px-1 px-2 py-1">
                                                        Precio unit
                                                    </th> */}
                                                    <th scope="col" className="text-center px-0 py-1">
                                                        Cajas
                                                    </th>
                                                    <th scope="col" className="text-center smax-sm:px-2 px-2 py-1">
                                                        Kg
                                                    </th>
                                                    <th scope="col" className="max-sm:px-0 justify-center items-center py-1 rounded-tr-lg">
                                                        <BsFillArchiveFill className="text-lg mx-auto"/>
                                                    </th>
                                                    {/* <th scope="col" className="rounded-tr-lg text-center max-sm:px-1 px-2 py-1">
                                                        Valor total
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                        {
                                            //viewCode.map((item) => {
                                                
                                            //   return (
                                                <tr /*key={item.id}*/ className="border-b-[0.1px] text-[11px] bg-[#222327] border-gray-500">
                                                    <th scope="row" className="px-3 py-4 sm:text-center font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                                        {/* {item.nombre} */}
                                                    </th>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.cliente} */}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.destino} */}
                                                    </td>
                                                    {/* <td className="px-2 text-center py-2">
                                                        $ {item.precio}
                                                    </td> */}
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.cantidad} */}
                                                    </td>
                                                    <td className="px-2 text-center py-2">
                                                        {/* {item.kgCaja * item.cantidad} */}
                                                    </td>
                                                    <td className="flex flex-cols justify-center items-center py-2">
                                                        <BsFillTrashFill className="text-lg text-red-700 mx-1 active:text-red-400 hover:text-red-500 duration-500"/>
                                                        <BsFillClipboard2CheckFill className=" ml-1 text-lg active:text-green-400 text-green-700 hover:text-green-600 duration-500"/>
                                                    </td>
                                                    {/* <td className="px-2 max-sm:px-1 text-center py-2">
                                                        $ {item.kgCaja * item.precio * item.cantidad}
                                                    </td> */}
                                                </tr>
                                        //     )})
                                        }
                                             <tr className="bg-gray-700 shadow-xl h-7">
                                                    <td className="rounded-bl-lg"></td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2"></td>
                                                    <td>Totales</td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">{/* {ticketData.itemsQ} |  */}</td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">{/* {ticketData.itemsQ} |  */}</td>
                                                    <td className="rounded-br-lg">{/* {ticketData.totalKg} | */}</td>
                                                </tr>
                                                <tr>
                                                    <td className="h-2"></td>
                                                </tr>
                                                    
                                                    
                                                    {/* <td className="px-0 max-sm:text-sm max-sm:mr-1 text-center rounded-r-lg text-gray-800 font-bold text-base py-2">
                                                        ${ticketData.totalBuy}
                                                    </td> */}
                                                
                                            </tbody>
                                            
                                        </table>
                                    {/* </div> */}
                                    <div className="w-full h-10 justify-between items-center flex flex-cols bg-gray-300 rounded-lg">
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg active:bg-slate-800 py-1 px-2 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillTrashFill className="text-lg text-red-700 hover:text-red-500 duration-500 mr-1"/>Descartar pallet</button>
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg active:bg-slate-800 py-1 px-2 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillTrashFill className="text-lg text-red-700 hover:text-red-500 duration-500 mr-1"/>Descartar productos</button>
                                        <button className="mx-10 max-lg:mx-2 max-sm:mx-1 max-sm:px-1 max-sm:text-sm flex items-center bg-slate-700 rounded-lg active:bg-slate-800 py-1 px-2 text-gray-300 hover:text-gray-100 hover:bg-slate-600 duration-500"><BsFillClipboard2CheckFill className="mr-1 text-lg text-green-700 hover:text-green-600 duration-500"/>Crear pallet</button>                 
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
            }
        </div>
)}