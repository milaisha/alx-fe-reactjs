import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the navigation bar on all pages */}
      <Routes>
        {/* Route for the home page (displays the list of recipes) */}
        <Route path="/" element={<RecipeList />} />

        {/* Route for adding a new recipe */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />

        {/* Route for viewing recipe details */}
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
