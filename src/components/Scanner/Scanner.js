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
        <div className="mb-20">
            <div className=" h-30 max-sm:mt-[40px] max-sm:mb-[10px] my-[50px] items-center bg-slate-50 max-sm:w-[330px] mx-auto rounded-lg max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Escanear Codigo de Barras & QR</h2>
            </div>
            <div className="mx-auto py-5 bg-no-repeat bg-cover bg-center bg-[url('/public/imgs/bg-04.jpg')] h-fit-content rounded-lg sm:w-[700px] lg:w-[1000px]">
                <div className="grid md:grid-cols-2 max-lg:w-[600px] mx-auto max-w-[900px] place-items-center">
                    <div className="my-[10px] sm:ml-[20px] min-w-[350px] max-h-[480px] bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                        <div className="px-1 max-w-[350px] py-2">  
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
                    <div className="my-[10px] mx-0 max-w-[300px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                        {/* {
                            barcodeScan.map((prod) => (
                                <div key={prod.id} className="p-2 max-w-[200px]">  
                                    <div className="font-bold text-gray-700 flex  pl-5 text-xl mb-2">
                                        <h4 className="pr-5 mt-3 text-gray-100">Producto</h4><button className="text-gray-400 absolute right-3 hover:text-gray-200 duration-300"><BsFillTrashFill/></button>
                                    </div>
                                    <p className="text-gray-300 text-base">Cliente: <strong></strong></p>
                                    <p className="text-gray-300 text-base">Destino: <strong></strong></p>
                                    <div className="">
                                        <p className="text-gray-300 pt-4 text-base">Cajas compradas: <strong></strong></p>
                                        <p className="text-gray-300 text-base">Precio por Kg: <strong>$ ,00</strong></p>
                                        <p className="text-gray-300 text-base">Kg por caja: <strong> kg</strong></p>
                                        <p className="text-gray-300 text-base">Valor total: <strong>$  ,00</strong></p>
                                    </div>
                                    <hr className="h-1 mx-auto mt-1 mb-1 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                                </div>
                          ))
                    }  */}
                    </div>                
                </div>
            </div>
        </div>
    )
}