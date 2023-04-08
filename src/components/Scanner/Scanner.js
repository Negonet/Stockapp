import { useState } from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import useScanDetection from "use-scan-detection"

export const Scanner = () => {

    const [ barcodeScan, setBarcodeScan ] = useState('')
    const [loading, setLoading] = useState(true)
    

    useScanDetection({
        onComplete: setBarcodeScan,
        minLenght: 100
        
    })
    const viewCode = barcodeScan.split(' ')

    const wipeScanner = () => {
        setBarcodeScan('')
        
    }
    
    //console.log(viewCode)

    return (
        <div className="mb-[100px]">
            <div className=" h-30 max-sm:mt-[40px] max-sm:mb-[10px] my-[40px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Escanear Codigo de Barras & QR</h2>
            </div>
            <div className="mx-auto py-5 bg-no-repeat bg-cover bg-center bg-[url('/public/imgs/bg-04.jpg')] h-[800px] rounded-lg sm:w-[700px] lg:w-[1300px]">
                <div className="grid h-[700px] md:grid-cols-1 lg:grid-cols-4 max-md:grid-cols-1 max-lg:w-[700px] mx-auto max-w-[1250px] max-sm:max-w-[400px] place-items-center">
                    <div className="my-[10px] col-span-1 sm:ml-[5px] w-[300px] max-h-[480px] bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                        <div className="px-1 py-2">  
                            <p className="hidden"></p>
                            
                            {/* <p className="text-gray-700 text-center text-base"><strong>Enfrente el codigo</strong></p>
                            <br/> */}
                            {/* <div className="">
                                <input onChange={handlerGetCode} className="h-[80px] w-full text-xs text-center border-2 border-rose-500"></input>
                            </div> */}
                            <br/>
                            <div className="font-bold text-gray-700 text-center text-sm mb-0">
                                <h4>Corresponde a</h4>
                            </div>
                            
                            <div className="mt-3">
                                <p className="text-gray-700 text-center text-base">Producto: <strong>{viewCode[0]}</strong></p>
                                <p className="text-gray-700 text-center text-base">Destino: <strong>{viewCode[1]}</strong></p>
                                <p className="text-gray-700 mt-1 text-center text-base">Carga: OP <strong>{viewCode[2]}</strong></p>
                                <p className="text-gray-700 mt-1 text-center text-base">Peso Neto: <strong>{viewCode[4]} kg</strong></p>
                                <p className="text-gray-700 mt-1 text-center text-base">Peso Bruto: <strong>{viewCode[5]} kg</strong></p>
                                <p className="text-gray-700 text-center text-base">Lote: <strong>{viewCode[3]}</strong></p>
                                <p className="text-gray-700 text-center text-base">Id: <strong>{viewCode[6]}</strong></p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                            <hr className="h-1 mx-auto mt-5 mb-3 bg-gray-200 border-0 rounded md:my-3 dark:bg-gray-700"/>
                            <div className="flex">
                                <button className="bg-green-700 py-[2px] px-[5px] my-2 mt-0 mx-[10px] rounded-md text-gray-900 hover:bg-green-600 hover:text-gray-300 ease-in-out duration-200">Aceptar</button>
                                <Link to="">
                                    <button onClick={wipeScanner} className="bg-red-700 py-[2px] px-[5px] mt-0 mx-[10px] rounded-md text-gray-900 hover:bg-red-800 hover:text-gray-200 ease-in-out duration-200">Borrar</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>            
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
                                                    <th scope="col" className="text-center smax-sm:px-2 px-2 py-1 rounded-tr-lg">
                                                        Kg
                                                    </th>
                                                    {/* <th scope="col" className="rounded-tr-lg text-center max-sm:px-1 px-2 py-1">
                                                        Valor total
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                        {
                                             viewCode.map((item) => {
                                                
                                               return (
                                                <tr key={item.id} className="border-b-[0.1px] text-[11px] bg-[#222327] border-gray-500">
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
                                                    {/* <td className="px-2 max-sm:px-1 text-center py-2">
                                                        $ {item.kgCaja * item.precio * item.cantidad}
                                                    </td> */}
                                                </tr>
                                               )})
                                        }
                                                <tr className="bg-gray-700 shadow-xl h-5">
                                                <td className="rounded-bl-lg"></td><td></td><td></td><td></td><td className="rounded-br-lg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="h-2"></td>
                                                </tr>
                                                
                                                <tr className="bg-gray-300">
                                                    <td className="rounded-l-lg"></td><td></td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                                        Totales
                                                    </td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2">
                                                    {/* {ticketData.itemsQ} |  */}
                                                    </td>
                                                    <td className="px-0 max-sm:text-sm text-center text-gray-600 font-bold text-base py-2 rounded-r-lg">
                                                    {/* {ticketData.totalKg} | */}
                                                    </td>
                                                    {/* <td className="px-0 max-sm:text-sm max-sm:mr-1 text-center rounded-r-lg text-gray-800 font-bold text-base py-2">
                                                        ${ticketData.totalBuy}
                                                    </td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    {/* </div> */}
                    </div>                
                </div>
            </div>
        </div>
    )
}