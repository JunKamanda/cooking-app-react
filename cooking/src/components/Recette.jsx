import React from "react";
import cookImg from "../assets/cook.jpg";

const Recette = () => {
  return (
    <div>
      <li>
        <h3>name</h3>
        <p>Origin</p>
        <img src={cookImg} alt="image's cook" />
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consectetur deleniti nam magnam. Illum quos labore reprehenderit iste
          praesentium molestias,
        </p>
      </li>
    </div>
  );
};

export default Recette;
