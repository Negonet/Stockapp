

export const Clientes = () => {

    return (
        <div>
            <div className=" h-30 max-sm:mt-[40px] my-[50px] items-center bg-slate-50 mx-auto rounded-lg max-sm:w-[330px] max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Clientes</h2>
            </div>

            <div className="grid mx-auto max-w-[900px] sm:mt-[140px] place-items-center">
                <div className="my-[20px] mx-0 max-w-[300px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">  
                    <div className="p-2 max-w-[200px]">  
                        <p className="hidden"></p>
                        <div className="font-bold text-gray-700 flex text-xl mb-2">
                            <h4 className="text-gray-100">Acceso a Clientes</h4>
                        </div>
                        <p className="text-gray-200 text-base">Cliente: <strong></strong></p>
                        <p className="text-gray-200 text-base">Destino: <strong> </strong></p>
                        <div className="">
                            <p className="text-gray-300 pt-4 text-base">Cajas compradas: <strong></strong></p>
                            <p className="text-gray-300 text-base">Precio por Kg: <strong>$ ,00</strong></p>
                            <p className="text-gray-300 text-base">Kg por caja: <strong> kg</strong></p>
                            <p className="text-gray-300 text-base">Valor total: <strong>$  ,00</strong></p>
                        </div>
                        <hr className="h-1 mx-auto mt-1 mb-1 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

