import { Link } from "react-router-dom"
import Banner from "../Banner/Banner.js"



export const Inicio = () => {

    return (

        <div>
            <Banner />
            <div className=" h-30 max-sm:mt-[30px] max-sm:mb-[10px] items-center bg-slate-50 my-[0px] mx-auto rounded-lg max-sm:w-[330px] max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Pagina de Inicio</h2>
                </div>
            <div className="max-sm:w-[350px] overflow-x-hidden max-w-[900px] items-center mx-auto">
            <hr className="mt-2"/>
                <div className="">
                    <img className="rounded-lg max-sm:mt-[8px] mt-[15px]" src="./imgs/pizarra.jpg"/>
                        
                        
                
                </div>
                <div className="bg-white rounded-lg">
                    <Link to="/products/corte">
                    <img className="rounded-lg shadow-[0px_12px_50px_2px_rgba(0,0,0,0.56)] hover:translate-x-[-100px] duration-700 max-sm:mt-[6px] mt-[15px]" src="./imgs/lamb2.jpg"/>
                    </Link>
                    {/*  */}
                </div>
                <div className="bg-white rounded-lg mb-20">
                    <Link className="bg-white" to="/products/menudencia">
                    <img className="rounded-lg shadow-[0px_12px_50px_2px_rgba(0,0,0,0.56)] hover:translate-x-[100px] duration-700 max-sm:mt-[6px] mt-[15px]" src="./imgs/lamb3.jpg"/>
                    </Link>
                    {/* <div className="w-10">
                        <span className="absolute font-lobster py-2 px-8 left-20 text-red-600 border-[0.1px] border-gray-100 bg-white/10 shadow-xl rounded-lg drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)] text-9xl top-[70px] justify-center items-center">
                                M<span className="text-white text-6xl">enudencia</span>
                                </span>
                    </div> */}
                </div>            
                {/* <div className="mt-2 bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
                    <div className="px-6 py-4">  
                        <p className="hidden"></p>
                        <div className="font-bold text-gray-700 text-xl mb-2">
                            <h4></h4>
                            <p className="text-gray-700 text-base">to </p>
                            <p className="text-gray-700 text-base">be </p>
                            <p className="text-gray-700 hidden text-base"></p>
                            <p className="text-gray-700 hidden text-base"></p>
                            <p className="text-gray-700 text-base">contine :)</p>
                        </div>
                    </div>
                </div>      */}
            </div>
        </div>
    )
}