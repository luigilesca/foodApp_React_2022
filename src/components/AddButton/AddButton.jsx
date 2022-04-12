import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AddButton.module.css";

function AddButton(props) {
  const [showAdd, setShowAdd] = useState(true);

  const addHandler = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className={styles.box} onClick={addHandler}>
      {showAdd ? (
        <button className={styles.add} onClick={props.onAdd}>
          Add To Favourite
        </button>
      ) : (
        <Link to={"/favourite/"}>
          <button className={styles.favourite}>View Favourite</button>
        </Link>
      )}
    </div>
  );
}

export default AddButton;
