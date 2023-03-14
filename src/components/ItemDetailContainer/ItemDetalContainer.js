import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { askProductId } from "../../helpers/askData";



export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)


    const { itemId } = useParams()
    
    console.log(itemId)
    console.log(item)

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
            <h2 className="text-white text-xl"> Item Detail Container</h2>
        </div>
    )
}