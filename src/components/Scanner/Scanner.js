import { useState } from "react"
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
                        <button className="bg-green-600 py-[2px] px-[5px] my-2 mt-0 mx-[10px] rounded-md active:bg-green-600 text-gray-900 hover:bg-green-500 hover:text-gray-700 ease-in-out duration-200 shadow-lg">Aceptar</button>
                        <button onClick={wipeScanner} className="bg-red-700 py-[2px] my-2 px-[5px] mt-0 mx-[10px] rounded-md text-gray-900 hover:bg-red-800 active:bg-red-700 hover:text-gray-200 ease-in-out duration-200 shadow-lg">Borrar</button>
                    </div>
                </div>
            </div>
        </div>     
)}

