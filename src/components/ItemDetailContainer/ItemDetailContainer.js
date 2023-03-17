import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { askProductId } from "../../helpers/askData";

import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailContainer/ItemDetailContainer.scss'
export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)


    const { itemId } = useParams()
    
    
    useEffect (() => {
        setLoading(true)

        askProductId( Number(itemId))
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (

        <div className="detailListing items-center">

                <div className=" h-30 bg-slate-50 p-2 shadow-lg">
                <h2 className=" text-gray-700 shadow-lg font-mono text-center text-3xl">Listado de productos</h2>
                
                </div>
                 
                
                
            
           
           

            <hr/>
            <div className="" >
           {

                loading ? <h2 className="text-white text-center text-lg font-bold">Cargando..</h2>
                    :<ItemDetail item={item}/>
                                      

           }
             </div>
        
        </div>
    )
}