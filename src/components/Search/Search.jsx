import styles from "./Search.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  const targetHandler = (e) => setInput(e.target.value);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={targetHandler}
          value={input}
          placeholder="Ex: pasta, egg, cake..."
          type="text"
        />
        <FaSearch onClick={submitHandler} className={styles.icon} />
      </form>
    </>
  );
}

export default Search;
