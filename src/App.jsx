import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

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
      <Switch>
        <Route exact path="/">
          <RecipeList />
        </Route>
        <Route path="/create">
          <RecipeForm />
        </Route>
        <Route path="/:id">
          <RecipeDetail />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;