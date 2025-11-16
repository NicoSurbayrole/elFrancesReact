import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navBar/Navbar.jsx";
import Products from "./components/products/Products.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
