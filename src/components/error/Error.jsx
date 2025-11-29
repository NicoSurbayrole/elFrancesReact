import NavIconContainer from "../nav_icon_container/NavIconContainer";
import styles from "./error.module.css";
import martillo from "../../assets/martillo.svg";

import { NavLink } from "react-router-dom";
const Error = ({ titel = "Error de 404 Pagina no encontrada" }) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_info}>
        <header className={styles.header_error}>
          <img src={martillo} alt="logo de martillo" />
          <div>
            <h1>EL FRANCÉS ANTIQUES</h1>
            <h2>ART & DECO</h2>
          </div>
        </header>
        <footer className={styles.footer_error}>
          <h2>{titel}</h2>
          <NavLink className={styles.btn_container} to={"/"}>
            <button className={styles.btn}>Volver al inicio</button>
          </NavLink>
        </footer>
      </div>
    </div>
  );
};

export default Error;
