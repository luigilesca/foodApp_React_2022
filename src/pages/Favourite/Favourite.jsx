import styles from "./Favourite.module.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

function Favourite() {
  const favouriteItems = useSelector((state) => state.favourite.items);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1>Your Favourite Recipes</h1>
        <div className={styles.container}>
          {favouriteItems.length === 0 ? (
            <p className={styles.info}>No Saved Recipes</p>
          ) : (
            favouriteItems.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                summary={item.summary}
                isFavourite={true}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Favourite;
