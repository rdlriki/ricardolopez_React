import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavBarBooster/NavbarBoostrap';
import ItemListContainerJsx from './components/ItemListContainer/ItemListContainerJsx'
import ItemDetailContainerJsx from './components/ItemDetailContainer/ItemDetailContainerJsx';
/* import Carrito from './components/Carrito/Carrito';
 */import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartProvider> {/* Agrego el CartProvider */}
      <BrowserRouter>
        <NavbarBoostrap />

        <Routes>
          <Route path="/" element={<ItemListContainerJsx greetings="Elija nuestros productos" />} />
          <Route path="/categoria/:catid" element={<ItemListContainerJsx greetings="Elija de acuerdo a su Filtrado" />} />
          <Route path="/producto/:productoid" element={<ItemDetailContainerJsx />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;