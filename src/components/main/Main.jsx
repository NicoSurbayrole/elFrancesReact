import style from "./main.module.css";
import getAllProducts from "../../utils/getAllProducts.js";
import { useEffect, useState } from "react";
const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data.slice(0,8)));
  }, []);

  console.log(products);

  return (
    <main className={style.main}>
      <div className={style.sidebar_container}>
        <aside>
          <div className={style.nav_categoris_container}>
            <header className={style.hedader_categori_container}>
              <h3>Categorias</h3>
            </header>
            <nav>
              <ul className={style.nav_list_container}>
                <li>Todas las Categorias</li>
                <li>Alfombras</li>
                <li>Cristaleria</li>
                <li>muebles</li>
                <li>Obras de arte</li>
                <li>Plateria</li>
                <li>Vajilla</li>
                <li>Otra</li>
                <li>Vidrios Firmados</li>
                <li>Iluminacion</li>
                <li>Esculturas</li>
                <li>Sillas y Sillones</li>
                <li>Relojes</li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
      <div className={style.products_container}>
            <header>
              <h2>Todos los Artículos</h2>
            </header>
        {products.length === 0 ? (
          <div>Cargando</div>
        ) : (
          <div className={style.productos_container}>
            {products.map((producto) => (
              <section  key={producto.product_id}>
                <header>
                  <img src={producto.image} alt="" />
                </header>
                <div>
                  <article>
                    <h3>{producto.name}</h3>
                    <p>{producto.description}</p>
                  </article>
                  <footer>
                    <small>{producto.price}</small>
                    <button>ver producto</button>
                  </footer>
                </div>
              </section>
            ))}
          </div>
        )}
        {/* {products.map((producto) => (
          <section key={producto.product_id}>
              <header>
                <img src={producto.image} alt="" />
              </header>
            <div>
              <article>
                <h3>{producto.name}</h3>
                <p>{producto.description}</p>
              </article>
              <footer>
                <small>{producto.price}</small>
                <button>ver producto</button>
              </footer>
            </div>
          </section>
        ))} */}
      </div>
    </main>
  );
};

export default Main;
