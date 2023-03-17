import { Link } from "react-router-dom"
import './Inicio.scss'






export const Inicio = () => {

    return (

        <div className="detailListing items-center">
              
              
                <h2 className="text-white text-center font-mono text-4xl">Pagina de Inicio</h2>
                <hr/>

                <Link><img className="rounded-lg" src="./imgs/pizarra.jpg"/></Link>

                <div className="startcard mt-4 bg-slate-50 p-2 rounded-lg overflow-hidden shadow-lg">
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
                </div>     
            
        </div>
    )
}