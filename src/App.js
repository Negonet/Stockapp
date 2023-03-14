import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetalContainer.js";
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import Navbar from "./components/Navbar/Navbar.js";
import Banner from "./components/Banner/Banner.js"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { Inicio } from "./components/Inicio/Inicio.js"
import { Scanner } from "./components/Scanner/Scanner.js";
import { Clientes } from "./components/Clientes/Clientes.js";



function App () {

  return (

    <BrowserRouter>
      <div>
        <Navbar />
        <Banner />

        <Routes>
          <Route path="/" element={ <Inicio/> }/>
          <Route path="/products/:categoryId" element={ <ItemListContainer/> }/>
          <Route path="/ItemListContainer/" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/Clientes" element={ <Clientes/> }/>
          <Route path="/Scanner" element={<Scanner/> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>
        
        

        
        
      </div>
    </BrowserRouter>
  );
}

export default App;

