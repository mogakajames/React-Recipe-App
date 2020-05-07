import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <img className={style.img} alt={image} src={image} />
      <h4>{title}</h4>
      <p>Calories: {calories}</p>
      <h4 className={style.h} ><i>Ingredients:</i></h4>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
