import serch from "../../assets/serch.svg";
import carrito from "../../assets/carrito.svg";
import style from "./navCartContainer.module.css";
import {useCart} from "../../context/cart/useCart";
import { useNavigate } from "react-router-dom";

const NavCartContainer = () => {
  const {getTotalProductos} = useCart();
  const navigate = useNavigate()

  return (
    <div>
      <div className={style.cart_container}>
        <span className={style.cart_span}>
          <input
            className={style.cart_input}
            id="buscarProducto"
            name="productoBuscado"
            type="text"
            placeholder="Buscar Producto..."
          />
          <label htmlFor="buscarProducto">
            <img
              className={style.lupa_busqueda}
              src={serch}
              alt="imagen de una lupa de búsqueda"
            />
          </label>
        </span>
        <span onClick={() =>navigate("/carrito")} className={style.span_carrito}>
          <img
            className={style.carrito}
            src={carrito}
            alt="carrito de compras"
          />
          <p className={style.cantidad_carrito}>{getTotalProductos()}</p>
        </span>
      </div>
    </div>
  );
};

export default NavCartContainer;
