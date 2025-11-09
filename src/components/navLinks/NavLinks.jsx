import style from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={style.nav_container}>
      <nav>
        <ul className={style.nav_links_container}>
          <li>Inicio</li>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
          <li>Catalogo</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
