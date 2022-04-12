import styles from "./Recipe.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { addItemToFavourite } from "../../store/cart-slice";
import AddButton from "../../components/AddButton/AddButton";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //add item to favourite
  const addToFavouriteHandler = () => {
    let title = details.title;
    let id = details.id;
    let image = details.image;
    let summary = details.summary;
    dispatch(
      addItemToFavourite({
        id,
        image,
        title,
        summary,
      })
    );
  };

  useEffect(() => {
    fetcheDetails();
    setIsLoading(true);
  }, [params.id]);

  const fetcheDetails = async () => {
    try {
      const response = await axios(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=32079a0064ec446099187ebb5c0ea0c6`
      );

      const data = response.data;

      setDetails(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const instructionsHandler = () => setActive("instructions");
  const ingredientsHandler = () => setActive("ingredients");

  return (
    <>
      <Header />
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>
          <div className={styles.info}>
            <div className={styles.btn}>
              <button
                className={`${active === "instructions" ? styles.active : ""} `}
                onClick={instructionsHandler}
              >
                Instructions
              </button>
              <button
                className={`${active === "ingredients" ? styles.active : ""} `}
                onClick={ingredientsHandler}
              >
                Ingredients
              </button>
            </div>

            <div className={styles.summary}>
              {active === "instructions" && (
                <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
              )}

              {active === "ingredients" && (
                <h4
                  className={styles.instructions}
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h4>
              )}
              <AddButton onAdd={addToFavouriteHandler} />
            </div>
          </div>
        </div>
      )}
      {!isLoading && details.length === 0 && (
        <p className={styles.error}>Sorry there is an error. Try reload the page.</p>
      )}
      {isLoading && <p className={styles.loading}>Is Loading...</p>}
    </>
  );
}

export default Recipe;
