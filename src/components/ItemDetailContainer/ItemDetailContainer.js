import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)


    const { itemId } = useParams()
    console.log(itemId)
    
    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                console.log(doc.id)
                console.log(doc.data())
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))
    }, [])

    return (

        <div className="max-sm:mt-[20px] my-[50px] m-auto max-w-[900px] items-center">

            <div className=" h-30 items-center max-sm:mt-[5px] my-[50px] bg-slate-50  mx-auto rounded-lg max-sm:w-[330px] p4 shadow-lg">
                <h2 className=" text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Descripcion del producto</h2>
            </div>
            <br/>
            <div className="grid place-items-center" >
           {
                loading ? <h2 className="text-white text-center text-lg font-bold">Cargando..</h2>
                    :<ItemDetail item={item}/>
           }
             </div>
        </div>
    )
}