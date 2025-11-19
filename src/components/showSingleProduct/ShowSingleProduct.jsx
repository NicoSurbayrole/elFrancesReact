import { useParams } from "react-router-dom";
import carrito from "../../assets/carrito.svg";
import camion from "../../assets/camion.svg";
import paquete from "../../assets/paquete.svg";
import style from "./showSinglProduct.module.css";

const ShowSingleProduct = ({ items }) => {
  const { id } = useParams();
  const productoFiltrado = items.find((item) => item.product_id === Number(id));

  return (
    <section className={style.Singelproduct_section}>
      <div className={style.product_continer}>
        <img src={productoFiltrado.imagUrl} alt={productoFiltrado.name} />
        <div className={style.product_info}>
          <h2>{productoFiltrado.name}</h2>
          <p>{productoFiltrado.description}</p>
          <small>u$s{productoFiltrado.price}</small>
          <button><img src={carrito} alt="" /> Agregar a carrito</button>
          <footer className={style.product_info_footer}>
            <p><img src={camion} alt="icono de camion" /> Envío a domicilio disponible</p>
            <p><img src={paquete} alt="icono de paquete" /> Artículo de alta calidad</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ShowSingleProduct;
