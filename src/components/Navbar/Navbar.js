
import CartWidget from "../CartWidget/CartWidget"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {useState} from "react"
import { Link } from "react-router-dom"
import './Navbar.scss'




const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [hideNav, setHideNav] = useState(false)

    const handleNav = () => {
        setNav (!nav)
    }


    const handleHideNav = () => {
        setHideNav(hideNav => !hideNav)
        handleNav()

        
    }
    const hiddenNav = hideNav ? 'ease-out duration-500 hidden' : ''; 

    return (
        <header className='header'>
           
            <div className="flex justify-between items-center max-sm:h-[60px] h-24 max-w-[1240px] mx-auto px-4 shadow-lg">
                <div className="flex item-center">
                    <div>
                        <img src='/imgs/logo2.png' alt='logo' className="rounded-lg mt-[6px] max-sm:w-[45px] max-w-[60px]" />   
                    </div>
                    <p className="p-4 text-3xl text-gray-100 max-sm:text-sm max-sm:px-2 font-lobster ">StockApp.</p>
                </div>
                <ul className="shadow-lg hidden bg-white/10 border-[0.1px] border-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg md:flex font-bold">
                    <li className="efecto px-4 py-3 text-gray-300 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/" className="hover:text-gray-200">Inicio</Link></li>
                    <li className="efecto px-4 py-3 text-gray-300 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/Scanner" className="hover:text-gray-200">Escanear</Link></li>
                    <li className="efecto px-4 py-3 text-gray-300 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400 hover:text-base"><Link to="/ItemListContainer" className="hover:text-gray-200">Productos</Link></li>
                    <li className="efecto px-4 py-3 text-gray-300 hover:bg-gray-700 hover:rounded-lg ease-in-out duration-500 hover:text-gray-400"><Link to="/Clientes" className="hover:text-gray-200">Clientes</Link></li>

                </ul>
                <form className="flex max-sm:mr-2 items-center">   
                    
                    <div className="relative max-sm:pr-0 max-sm:w-[120px] w-full">
                        <div className="absolute max-sm:hidden inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="voice-search" className="border-[0.5px] border-gray-500 text-gray-900 max-sm:text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-sm:pl-0 max-sm:text-[12px] pl-10 p-2.5 max-sm:text-center bg-white/10 bg-opacity-50 backdrop-filter backdrop-blur-lg" placeholder="Buscar producto.." required></input>
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center max-sm:pr-1 pr-3">
                            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm max-sm:hidden font-medium text-white rounded-lg border-[0.5px] border-gray-500 hover:text-white bg-white/10 bg-opacity-50 backdrop-filter backdrop-blur-lg hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-7 h-5 mr-1 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    </form>
                <div className="flex text-gray-100 max-sm:pl-[0px] items-center">
                    <div onClick={handleNav} className="block md:hidden">
                        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
                    </div>
                    
                    <div className="ml-2">
                        <CartWidget/>
                    </div>
                </div>
                
            </div>
            <div className={nav ? "fixed md:hidden z-10 left-4 top-15 w-[60%] text-sm text-white font bg-black" : "fixed left-[-100%] ease-in duration-500" }>
                <ul onClick={handleHideNav} className="p-4 ${hiddenNav}"><li className="p-5 border-b border-[#726c6c] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/I">Inicio</Link></li>
                    <li className="efecto p-5 border-b border-[#a89f9f] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="Scanner">Escanear</Link></li>
                    <li className="efecto p-5 border-b border-[#dbcfcf] hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/ItemListContainer">Productos</Link></li>
                    <li className="efecto p-5 hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link to="/Clientes">Clientes</Link></li>
                    <li className="efecto p-5 hover:bg-[#262626] ease-in-out duration-500 hover:text-base"><Link onClick={handleHideNav} className={hiddenNav}>Cancelar</Link></li>
                </ul>
            
            </div>

        </header>
    )
}

export default Navbar 
