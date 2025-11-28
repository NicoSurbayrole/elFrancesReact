import style from "./sidebar.module.css";


const Sidebar = ({ onFilter }) => {

 const handleCategori = (e) => {
    const categoria = e.target.innerText.toLowerCase();
    onFilter(categoria);
  };

  return (
    <div className={style.sidebar_container}>
      <aside>
        <div className={style.nav_categoris_container}>
          <header className={style.hedader_categori_container}>
            <h3>Categorias</h3>
          </header>
          <nav>
            <ul className={style.nav_list_container}>
              <li onClick={handleCategori}>Todas las Categorias</li>
              <li onClick={handleCategori}>Alfombras</li>
              <li onClick={handleCategori}>Cristaleria</li>
              <li onClick={handleCategori}>muebles</li>
              <li onClick={handleCategori}>Obras de arte</li>
              <li onClick={handleCategori}>Plateria</li>
              <li onClick={handleCategori}>Vajilla</li>
              <li onClick={handleCategori}>Otra</li>
              <li onClick={handleCategori}>Vidrios Firmados</li>
              <li onClick={handleCategori}>Iluminacion</li>
              <li onClick={handleCategori}>Esculturas</li>
              <li onClick={handleCategori}>Sillas y Sillones</li>
              <li onClick={handleCategori}>Relojes</li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
