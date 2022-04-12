import styles from "./Card.module.css";
import RemoveButton from "../RemoveButton/RemoveButton";
import { useDispatch } from "react-redux";
import { removeItemToFavourite } from "../../store/cart-slice";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();

  const removeToFavouriteHandler = () => {
    let id = props.id;

    console.log();

    dispatch(removeItemToFavourite(id));
  };

  return (
    <div className={` ${props.isFavourite ? styles.card_fav : styles.card}`}>
      <div className={styles.container}>
        <img className={styles.image} src={props.image} alt={props.title} />

        <div className={styles.content}>
          <h3 className={styles.title}>{props.title}</h3>

          {props.isFavourite && <p dangerouslySetInnerHTML={{ __html: props.summary }}></p>}
          <div recipe={props.recipe} className={styles.btnbox}>
            {props.isFavourite ? (
              <RemoveButton onRemove={removeToFavouriteHandler} />
            ) : (
              <Link to={"/recipe/" + props.id}>
                <button id={props.id} className={styles.button}>
                  Read Recipe
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
