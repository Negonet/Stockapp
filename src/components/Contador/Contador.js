import './Contador.scss'

import { useState} from "react"

const Contador = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter +1)
    }

    const handleClick2 = () => {
        if (counter > 0) {
            setCounter(counter -1)
        } 
    }

    return (
        <div className="flex">
              <button onClick={handleClick} className="btn1 bg-black p-1"><a href="#">+</a></button>     
              <p className="p-1">{counter}</p>
              <button onClick={handleClick2} className="btn2 bg-black p-1"><a href="#">-</a></button>     
              <div className="">
                 <button type="submit" className="addtocart"><a href="#">Agregar al carrito</a></button>
              </div>
 
        </div>
       
    )
}




export default Contador
