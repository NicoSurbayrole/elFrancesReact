import style from "./showProducts.module.css";
import Sidebar from "../sidebar/Sidebar.jsx";

const ShowProducts = ({ items }) => {
  return (
    <>
      <header>
        <h2 className={style.titel_articulos}>Todos los Artículos</h2>
      </header>
      <div className={style.products_contain}>
        <Sidebar />
        {items.map((item) => (
          <div key={item.product_id}>
            <section accessKey={item.product_id} className={style.products}>
              <header>
                <img
                  src={item.imagUrl}
                  className={style.imagen_producto}
                  alt={item.name}
                />
              </header>
              <div className={style.info_products}>
                <h3>{item.name}</h3>
                <small>{item.price}$usd</small>
                <button accessKey={item.product_id}>Ver producto</button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
