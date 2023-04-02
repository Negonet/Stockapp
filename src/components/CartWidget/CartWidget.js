import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContex"


const CartWidget = () => {

    const { itemQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className="w-[60px] ml-2">
            <img alt='cart' className='max-w-[50px] float-left rounded-2xl max-sm:w-[35px] max-sm:my-[6px] shadow-xl' src='/imgs/cart.jpg'/>
            <span className="float-right font-bold">{itemQuantity()}</span>
        </Link>
    )
}

export default CartWidget