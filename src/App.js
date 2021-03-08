import React, {useState} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import RecipeList from './RecipeList'
require('dotenv').config()

function App() {

  //const apiKey = process.env.API_KEY
  const appId = 'a0ccb46e'
  const apiKey = 'e2c8adec027507972db419891845e1f8'
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`

  const sendSearch = async () => {
    setRecipes(await fetch(url).then(response=> response.json()).then(data => data.hits)) 
  }

  const changeHandler = e => {
    setSearch(e.target.value)
  }

  const searchQuery = e => {
    e.preventDefault()
    sendSearch();
    console.log( recipes)
    setSearch("")
  }

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={searchQuery}>
          <input className="search-form" type="text" onChange={changeHandler} value={search}></input>
          <Button type="submit" size="small" variant="contained" color="primary" >Search</Button>
        </form>
      </div>
      <div className="recipe__holder">
        {Object.keys(recipes).map( (key, index) => (
          <RecipeList title={recipes[index].recipe.label} image={recipes[index].recipe.image} 
          calories={recipes[index].recipe.calories}
          ingredients = {recipes[index].recipe.ingredientLines}
          key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;