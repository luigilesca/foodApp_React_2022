import axios from "axios";
import styles from "./Searched.module.css";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  let params = useParams();

  useEffect(() => {
    getSearched(params.search);
    setIsLoading(true);
  }, [params.search]);

  const getSearched = async (name) => {
    setIsLoading(true);

    try {
      const response = await axios(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=32079a0064ec446099187ebb5c0ea0c6&number=9&query=${name}&diet=vegetarian`
      );
      const data = response.data;

      setSearchedRecipes(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <Search />
      <h2 className={styles.title}>
        Results for: <span>{params.search}</span>{" "}
      </h2>
      {!isLoading && searchedRecipes.length > 0 && (
        <div className={styles.wrapper}>
          {searchedRecipes.map((recipe) => {
            return (
              <Card key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
            );
          })}
        </div>
      )}
      {!isLoading && searchedRecipes.length === 0 && (
        <p className={styles.error}>Found No Recipe</p>
      )}
      {isLoading && <p className={styles.loading}>Is Loading...</p>}
    </>
  );
}

export default Searched;
