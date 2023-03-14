import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetalContainer.js";
import ItemListCointainer from "./components/itemListContainer/itemListContainer.js";
import Navbar from "./components/Navbar/Navbar.js";
import Banner from "./components/Banner/Banner.js"
import { BrowserRouter} from "react-router-dom"



function App () {

  return (

    <BrowserRouter>
      <div>
        <Navbar />
        <Banner />

        <ItemListCointainer greeting='Happy shopping!' />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

