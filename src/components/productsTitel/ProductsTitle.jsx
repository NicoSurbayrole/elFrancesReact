import style from "./productsTitel.module.css";

const ProductsTitel = ({titel}) => {
  return (
    <header>
      <h2 className={style.titel_articulos}>{titel}</h2>
    </header>
  );
};

export default ProductsTitel;