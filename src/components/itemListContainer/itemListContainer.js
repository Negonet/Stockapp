
import './itemListContainer.scss'
import { useState} from "react"
import { useEffect} from "react"
import { askData } from '../../helpers/askData'
import { ItemList } from '../itemList/itemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ( {} ) => {

    const { categoryId } = useParams()
    console.log(categoryId)
    
    const [product, setProducts] = useState([])

    useEffect (() => {
        askData()
            .then((response) => {
                if (!categoryId) {
                    setProducts(response)
                } else {
                    setProducts( response.filter((prod) => prod.category === categoryId))
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])



    return (
        <div className='listado__items'>
           
        <ItemList items={product}/>                   
            
        </div>
    )
}

export default ItemListContainer