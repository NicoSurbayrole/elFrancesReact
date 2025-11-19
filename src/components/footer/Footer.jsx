import martillo from "../../assets/martillo.svg";
import ubicacion from "../../assets/ubicacion.svg";
import telefono from "../../assets/telefono.svg";
import mail from "../../assets/mail.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo_container}>
        <img src={martillo} alt="logo de martillo" />
        <small>EL FRANCÉS ANTIQUES - Art & Deco</small>
      </div>
      <div className={style.container}>
        <header>
          <h3>Enlaces Rápidos</h3>
        </header>
        <nav>
          <ul className={style.links}>
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
            <li>Catalogo</li>
          </ul>
        </nav>
      </div>
      <div className={style.container}>
        <header>
          <h3>Contáctanos</h3>
        </header>
        <ul>
          <li>
            <img src={ubicacion} alt="icono ubicacion" />
            Inclán 3064 (CP1258), CABA, Argentina
          </li>
          <li>
            <img src={telefono} alt="icono telefono" />
            +54 11 2285385
          </li>
          <li>
            <img src={mail} alt="icono mail" />
            info@elfrances.com.ar
          </li>
        </ul>
      </div>
      <div className={style.container}>
        <header>
          <h3>Siguenos</h3>
        </header>
        <aside className={style.redes}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/share/16rHpSN63X/?mibextid=wwXIfr"
          >
            <img src={facebook} alt="icono de facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/elfrancesantiques?igsh=ajZ1M3F3amdibnc"
          >
            <img src={instagram} alt="icono de instagram" />
          </a>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
