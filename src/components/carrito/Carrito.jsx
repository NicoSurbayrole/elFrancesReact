import Swal from "sweetalert2";
import { useCart } from "../../context/cart/useCart";
import style from "./carrito.module.css";

const Carrito = () => {
  const { getAllCartProducts, deleteCartProduct, getAllPrice } = useCart();
  const cart = getAllCartProducts();
  const handelDeletProduct = (item) => {
    Swal.fire({
      title: "Seguro Quieres Eliminar El Producto?",
      icon: "warning",
      iconColor: "#c79a1b",
      showCancelButton: true,
      confirmButtonColor: "#c79a1b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar Producto!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "El Producto Se elimino Correctamente Del Carrito!",
          icon: "success",
          timer: 1000,
        });
        deleteCartProduct(item.product_id);
      }
    });
  };
  return cart.length === 0 ? (
    <p className={style.Carrito_vacio}>No hay productos en el carrito😞</p>
  ) : (
    <main className={style.main_cart}>
      {cart.map((item) => (
        <section className={style.cart_container} key={item.product_id}>
          <div>
            <img className={style.img} src={item.imagUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <small>u$s{item.price}</small>
            <p>cantidad: {item.count}</p>
            <button
              onClick={() => handelDeletProduct(item)}
              className={style.btn}
            >
              Eliminar
            </button>
          </div>
        </section>
      ))}
      <section className={style.finishCart_container}>
        <h3>Total:</h3>
        <small>usd {getAllPrice()}</small>
        <button>Terminar Compra</button>
      </section>
    </main>
  );
};

export default Carrito;
