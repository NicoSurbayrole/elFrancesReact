import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;