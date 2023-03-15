import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { askProductId } from "../../helpers/askData";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


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

        <div className="">
           {

                loading ? <h2 className="text-white text-lg font-bold">Cargando..</h2>
                    :<ItemDetail item={item}/>
                                      

           }
        </div>
    )
}