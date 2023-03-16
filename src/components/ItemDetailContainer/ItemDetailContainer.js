import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { askProductId } from "../../helpers/askData";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss'

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

        <div className="listado_items">
            
            <div className=" h-30 items-center bg-slate-50 p4 shadow-lg">
                <h2 className=" text-gray-700 pt-2 shadow-lg font-mono text-center text-3xl">Listado de productos</h2>
                </div>

             <hr/>
             <div className="grid grid-cols-3 itemCard" >
           {

                loading ? <h2 className="text-white text-lg font-bold">Cargando..</h2>
                    :<ItemDetail item={item}/>
                                      

           }
             </div>
        </div>
    )
}