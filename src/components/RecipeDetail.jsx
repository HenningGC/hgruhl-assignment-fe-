import React, { useState } from 'react';
import axios from 'axios';

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState({});
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  // code for fetching the recipe details from the API goes here

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`/${recipe.id}`, { name, ingredients, steps, rating, favorite })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleDelete = () => {
    axios.delete(`/${recipe.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <ul>
        <li>Ingredients: {recipe.ingredients}</li>
        <li>Steps: {recipe.steps}</li>
        <li>Rating: {recipe.rating}</li>
        <li>Favorite: {recipe.favorite ? 'Yes' : 'No'}</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="ingredients">Ingredients:</label>
        <input type="text" id="ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        <br />
        <label htmlFor="steps">Steps:</label>
        <input type="text" id="steps" value={steps} onChange={(event) => setSteps(event.target.value)} />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" value={rating} onChange={(event) => setRating(event.target.value)} />
        <br />
        <label htmlFor="favorite">Favorite:</label>
        <input type="checkbox" id="favorite" checked={favorite} onChange={(event) => setFavorite(event.target.checked)} />
        <br />
        <button type="submit">Update Recipe</button>
      </form>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

export default RecipeDetail;