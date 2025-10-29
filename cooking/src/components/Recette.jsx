import React from "react";

const Recette = ({meal}) => {
  return (
    <div>
      <li>
        <h3>{meal.strMeal}</h3>
        <p>Origin : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="image's cook" />
        <p className="description">{meal.strInstructions}</p>
      </li>
    </div>
  );
};

export default Recette;
