import { AiFillHeart } from "react-icons/ai";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <NavLink to={"/"}>
          <h1 className={styles.logo}>Veg - Recipe</h1>
        </NavLink>
      </div>

      <div className={styles.header_link}>
        <NavLink to={"/"}>
          <h4 className={styles.home}>Home</h4>
        </NavLink>

        <NavLink to={"/favourite/"}>
          <div className={styles.link}>
            <AiFillHeart className={styles.icon} />
            <h4 className={styles.favourite}>Favourites</h4>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
