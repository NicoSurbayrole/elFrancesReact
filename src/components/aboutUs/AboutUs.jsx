import francesAntiques from "../../assets/hernan-cajaraville.png";
import style from "./aboutUs.module.css";
const AboutUs = () => {
  return (
    <section>
      <div className={style.container} >
        <div className={style.info_contain}>
          <aside className={style.image_container}>
            <img
              src={francesAntiques}
              alt="imagen hecha por IA de Hernan Cajaraville"
            />
          </aside>
          <div className={style.info}>
            <h2>Quienes Somos</h2>
            <p>
              Soy Hernán Cajaraville, martillero público especializado en remates de antiguedades, con más de 40 años de experiencia.
            </p>
            <p>
              Suscribite a nuestra página y enterate a tiempo de eventos, venta
              de artículos únicos de colección, arte y antigüedades
            </p>
            <footer className={style.footer}>
              <h3>Suscribite a nuestro newsletter</h3>
              <form>
                <input type="email" placeholder="Tu correo electronico" />
                <button>Suscribirme</button>
              </form>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
