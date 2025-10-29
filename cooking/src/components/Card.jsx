import React, { useEffect, useState } from "react";
// import Recette from "./Recette";
import cookImg from "../assets/cook.jpg";

import axios from "axios";

const Card = () => {
  //state
  const [meals, setMeals] = useState([]);

  //comportement
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
      });
  }, []);

  //render
  return (
    <div className="card">
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <p>Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt="image's cook" />
            <p className="description">{meal.strInstructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
