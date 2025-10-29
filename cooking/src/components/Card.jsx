import React, { useEffect, useState } from "react";
import Recette from "./Recette";
import axios from "axios";

const Card = () => {
  //state
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //comportement
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((res) => {
        setMeals(res.data.meals || []);
        console.log(res.data.meals);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
      });
  }, [inputValue]);

  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }

  //render
  return (
    <div className="card">
      <div className="navigation">
        <form>
          <input
            type="text"
            id="nom"
            placeholder="Tapez le nom d'un aliment (en anglais)"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
      </div>
      <ul>
        {meals && meals.length > 0 ? (
          meals
          .slice(0,24)
          .map((meal) => <Recette key={meal.idMeal} meal={meal} />)
        ) : (
          <p>Chargement...</p>
        )}
      </ul>
    </div>
  );
};

export default Card;
