import React from 'react';
import './RecipeList.css'

const RecipeList = ({title, image, calories, ingredients}) => {
    return(
        <div className="recipe__container">
            <h1>{title}</h1>
            <img src={image} alt=""></img>
            <h3>Calories: {calories.toFixed()}</h3>
            <div className="recipeList-container">
                {ingredients.map((ingredient,index) => (
                    <h4 className="list-member" key={index} >{ingredient}</h4>
                ))}
            </div>

        </div>
    )
}

export default RecipeList;