
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.scss"

const Navbar = () => {

    return (
        <header className='header'>
           <div className='header__container'>
                    <img src='./imgs/logo.png' alt='logo' className="header__logo" />
                    
                    <nav className="navbar">
                        <button><a href="#" className="navbar__link">Escanear Producto</a></button>
                        <button><a href="#" className="navbar__link">Carrito</a></button>
                        <button> <a href="#" className="navbar__link">Clientes</a></button>

                    </nav>

                    <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar