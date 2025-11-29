import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);

  const getTotalProductos = () =>
    cartCount.reduce((acc, current) => acc + current.count, 0);

  const addToCart = (producto) =>
    setCartCount((cart) => {
      const productoRepetido = cart.find((item) => item.product_id === producto.product_id);

      if (!productoRepetido) {
        producto.count = 1;
        return [...cart, producto];
      }

      if (productoRepetido.count <= productoRepetido.stock) {
        producto.count = 1;
        producto.count++;
        return [...cart];
      }
      return cart;
    });

    const getProductFiltrado = (id) =>{
      const productoCarrito = cartCount.find((procuto) => Number(id) === procuto.product_id) 
      return productoCarrito
    }

    const getAllCartProducts = () => cartCount;

  return (
    <CartContext.Provider value={{ getTotalProductos, addToCart, getProductFiltrado, getAllCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
