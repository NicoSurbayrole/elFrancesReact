import style from "./productsContainer.module.css";
import Sidebar from "../sidebar/Sidebar.jsx";
import ShowProducts from "../showProducts/ShowProducts.jsx";
import ProductsTitel from "../productsTitel/ProductsTitle.jsx";

const ProductsMain = ({ items , onFilter }) => {
  
  return (
    <>
      <ProductsTitel titel="Todos los Artículos" />
      <div className={style.products_main}>
        <Sidebar onFilter={onFilter} />
        <div className={!items ? "" : style.products_contain}>
          <ShowProducts items={items} />
        </div>
      </div>
    </>
  );
};

export default ProductsMain;
