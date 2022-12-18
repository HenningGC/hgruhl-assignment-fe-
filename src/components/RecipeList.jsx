import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      axios.get('/')
        .then((response) => {
          setRecipes(response.data.recipes);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    );
  }