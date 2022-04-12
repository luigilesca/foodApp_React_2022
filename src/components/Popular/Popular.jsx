import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";
import Card from "../Card/Card";

function Popular() {
  const [popular, setPopular] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.spoonacular.com/recipes/random?apiKey=32079a0064ec446099187ebb5c0ea0c6&number=9&tags=vegetarian`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const check = localStorage.getItem("popular");

      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const response = await axios(url);
        const data = response.data;

        localStorage.setItem("popular", JSON.stringify(data.recipes));

        setPopular(data.recipes);

        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Popular Vegetarian Recipes</h2>
      {!isLoading && (
        <div className={styles.wrapper}>
          {popular.map((recipe) => {
            return (
              <div key={recipe.id}>
                <Card key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <p className={styles.loading}>Is Loading...</p>}
    </div>
  );
}

export default Popular;
