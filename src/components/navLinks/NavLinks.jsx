import { NavLink } from "react-router-dom";
import style from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={style.nav_container}>
      <nav>
        <ul className={style.nav_links_container}>
          <NavLink className={style.nav_link} to={"/"}>Inicio</NavLink>
          <NavLink className={style.nav_link} to={"/sobre-nosotros"}>Sobre Nosotros</NavLink>
          <NavLink className={style.nav_link} to={"/contacto"}>Contacto</NavLink>
          <NavLink className={style.nav_link} to={"/catalogo"}>Catalogo</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
