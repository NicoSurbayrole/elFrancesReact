import AboutUsFooter from "../aboutUsFooter/AboutUsFooter";
import style from "./aboutUsInfo.module.css";

const AboutUsInfo = () => {
  return (
    <div className={style.info}>
      <h2>Quienes Somos</h2>
      <p>
        Soy Hernán Cajaraville, martillero público especializado en remates de
        antiguedades, con más de 40 años de experiencia.
      </p>
      <p>
        Suscribite a nuestra página y enterate a tiempo de eventos, venta de
        artículos únicos de colección, arte y antigüedades
      </p>
      <AboutUsFooter/>
    </div>
  );
};

export default AboutUsInfo;
