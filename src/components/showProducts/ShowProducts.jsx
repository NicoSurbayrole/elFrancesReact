import { useNavigate } from "react-router-dom";
import style from "./showProducts.module.css";
const ShowProducts = ({ items }) => { 
  const navigate = useNavigate();

  const singleProduct = (e) => navigate(`/producto/${e.target.accessKey}`);
   

  return  (
    !items ? <p className={style.not_found_products}>No se encontraron productos</p> :
    items.map((item) => (
    <div key={item.product_id} className={items.length < 12 ? style.productosFiltrados : ""}>
      <section className={style.products}>
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
          <button onClick={singleProduct} accessKey={item.product_id}>Ver producto</button>
        </div>
      </section>
    </div>
  )))
};

export default ShowProducts;
