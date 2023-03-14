
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.scss"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {useState} from "react"
import { Link } from "react-router-dom"





const Navbar = () => {

    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav (!nav)
    }


    return (
        <header className='header'>
           
                    
                    <div className="flex justify-between items-center h-24 max-w-[1240px] bg-slate-50 mx-auto px-4 shadow-lg">
                        <div className="flex item-center">
                            <Link>
                                <img src='./imgs/logo.png' alt='logo' className="header__logo" />   
                            </Link>
                            <p className="p-4 text-xl text-gray-700 font-serif">StockApp.</p>
                        </div>
                        <ul className="shadow-lg hidden md:flex font-bold">
                            <li className="p-4 text-gray-700 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/" className="hover:text-gray-200">Inicio</Link></li>
                            <li className="p-4 text-gray-700 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/Scanner" className="hover:text-gray-200">Escanear</Link></li>
                            <li className="p-4 text-gray-700 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400 hover:text-base"><Link to="/ItemListContainer" className="hover:text-gray-200">Productos</Link></li>
                            <li className="p-4 text-gray-700 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/Clientes" className="hover:text-gray-200">Clientes</Link></li>

                        </ul>
                        <form className="flex items-center">   
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar producto.." required></input>
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-7 h-5 mr-1 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                         </form>
                        <div className="flex items-center">
                            <div onClick={handleNav} className="block md:hidden">
                                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                            </div>
                            
                            <div className="ml-2">
                                <CartWidget/>
                            </div>
                        </div>
                        
                        </div>
                        <div className={!nav ? "fixed left-[-100%] ease-in duration-500" : "fixed md:hidden left-4 top-15 w-[60%] text-sm text-white font bg-black"}>
                            <ul className="p-4">
                                    <li className="p-5 border-b border-[#726c6c] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/I">Inicio</Link></li>
                                    <li className="p-5 border-b border-[#a89f9f] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="Scanner">Escanear</Link></li>
                                    <li className="p-5 border-b border-[#dbcfcf] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/ItemListContainer">Productos</Link></li>
                                    <li className="p-5 hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/Clientes">Clientes</Link></li>

                            </ul>
                        </div>
                    
                    
            
        </header>
    )
}

export default Navbar 