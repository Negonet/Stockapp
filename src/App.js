
import ItemListCointainer from "./components/itemListContainer/itemListContainer.js";
import Navbar from "./components/Navbar/Navbar.js";




function App () {

  return (
    <div>
      <Navbar />

      <ItemListCointainer greeting='Happy shopping!' />
    </div>
  );
}

export default App;

