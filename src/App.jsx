import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Recipe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/">
          <RecipeList />
        </Route>
        <Route path="/create">
          <RecipeForm />
        </Route>
        <Route path="/:id">
          <RecipeDetail />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;