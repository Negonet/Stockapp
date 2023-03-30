import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { Inicio } from "./components/Inicio/Inicio.js"
import { Scanner } from "./components/Scanner/Scanner.js";
import { Clientes } from "./components/Clientes/Clientes.js";
import { CartProvider } from "./components/context/CartContex.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";
import { Ticket } from "./components/Ticket/Ticket.js";
import { Footer } from "./components/Footer/Footer.js";

function App () {

  
    return (

    <CartProvider >

      <BrowserRouter>
          
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
          <Route path="/Scanner" element={<Scanner /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>
         <Footer />
       </BrowserRouter>

    </CartProvider>
    
  );
}

export default App;

