import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol className="ingredient-list">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories} lbs</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
