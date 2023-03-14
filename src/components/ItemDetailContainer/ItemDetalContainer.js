import { useEffect, useState } from "react";
import { askProductId } from "../../helpers/askData";



export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(item)

    useEffect (() => {
        setLoading(true)

        askProductId()
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (

        <div>
            <h2>Item Detail Container</h2>
        </div>
    )
}