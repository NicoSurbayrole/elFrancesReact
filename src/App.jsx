import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navBar/Navbar.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
import Home from "./pages/home/Home";
import FooterView from "./pages/footerView/FooterView.jsx";
import SingleProductView from "./pages/singleProductView/SingleProductView.jsx";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/:id" element={<SingleProductView />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterView />
    </>
  );
}

export default App;
