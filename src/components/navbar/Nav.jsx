import { NavLink } from "react-router-dom";

import style from "./navbar.module.css";
import NavLinks from "../navLinks/NavLinks";
import NavIconContainer from "../nav_icon_container/NavIconContainer";
import NavCartContainer from "../nav_cart_container/NavCartContainer";

const Nav = () => {
  return (
    <header className={style.navbar}>
      <NavIconContainer />
      <NavLinks />
      <NavCartContainer />
    </header>
  );
};

export default Nav;
