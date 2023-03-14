
import './itemListContainer.scss'
import { useState} from "react"
import { useEffect} from "react"
import { askData } from '../../helpers/askData'
import { ItemList } from '../itemList/itemList'

const ItemListCointainer = ( {} ) => {



    
    const [product, setProducts] = useState([])

    useEffect (() => {
        askData()
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])



    return (
        <div className='listado__items'>
           
        <ItemList items={product}/>                   
            
        </div>
    )
}

export default ItemListCointainer