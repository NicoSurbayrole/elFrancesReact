import martillo from "../../assets/martillo.svg";
import style from "./navIconContainer.module.css";

const NavIconContainer = () => {
  return (
    <div className={style.logo_container}>
      <img src={martillo} alt="logo de martillo" />
      <div className={style.text_logo_container}>
        <h1>EL FRANCÉS ANTIQUES</h1>
        <h2>ART & DECO</h2>
      </div>
    </div>
  );
};

export default NavIconContainer;
