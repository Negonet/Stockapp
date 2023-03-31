import { CartProvider } from "./components/context/CartContex.js";
import { Footer } from "./components/Footer/Footer.js";
import { LoginProvider } from "./components/context/LoginContext.js";
import AppRouter from "./routes/AppRouter.js";


function App () {

  
    return (
      <LoginProvider>
        <CartProvider >
          <AppRouter />
          <Footer />
        </CartProvider>
      </LoginProvider>
      
  );
}

export default App;

