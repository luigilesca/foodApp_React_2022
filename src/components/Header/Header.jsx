import { AiFillHeart } from "react-icons/ai";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
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
  );
}

export default Header;
