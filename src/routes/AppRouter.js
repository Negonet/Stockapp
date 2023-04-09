import { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginContext } from "../components/context/LoginContext"
import { Inicio } from "../components/Inicio/Inicio"
import ItemListContainer from "../components/itemListContainer/itemListContainer"
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import { Ticket } from "../components/Ticket/Ticket"
import Checkout from "../components/Checkout/Checkout"
import { Clientes } from "../components/Clientes/Clientes"
import { Scanner } from "../components/Scanner/Scanner"
import { LoginScreen } from "../components/LoginScreen/LoginScreen"
import Navbar from "../components/Navbar/Navbar"
import { Logistics } from "../components/Logistics/Logistics"



const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (

        <BrowserRouter>
            { 
              user.logged 
                ? <>  
                    <Navbar />
              
                    <Routes>
                          <Route path="/" element={ <Inicio/> }/>
                          <Route path="/products/:categoryId" element={ <ItemListContainer/> }/>
                          <Route path="/ItemListContainer/" element={ <ItemListContainer /> }/>
                          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                          <Route path="/Cart/" element={ <Cart /> }/>
                          <Route path="/Ticket/:ticketId" element={ <Ticket /> }/>
                          <Route path="/Checkout" element={ <Checkout />}/>
                          <Route path="/Clientes" element={ <Clientes /> }/>
                          <Route path="/Logistics" element={<Logistics /> }/>
                          <Route path="*" element={ <Navigate to="/"/> }/>
                    </Routes>
                  </>
                : <Routes>
                    <Route path="/login" element={ <LoginScreen /> }/>
                    <Route path="*" element={ <Navigate to="/login" /> } />
                  </Routes>
                  
            }      

        </BrowserRouter>
    )
}

export default AppRouter
