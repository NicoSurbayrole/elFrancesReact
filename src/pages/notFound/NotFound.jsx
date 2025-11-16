import styles from "./notFound.module.css";

import { NavLink } from "react-router-dom";

import error404 from "../../assets/notFound.svg";

const NotFound = () => {
  return (
    <div className={styles.imgContainer}>  
      <img className={styles.img} src={error404} alt="404 not found" />
      <NavLink to={"/"}><button className={styles.button}>Volver al inicio</button></NavLink>
    </div>
  );
};

export default NotFound;
