import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navBar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
