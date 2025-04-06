import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch from an API here
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Discover Recipes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

function RecipeCard({ recipe }) {
  return (
    <Link 
      to={`/recipes/${recipe.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-white font-bold text-xl">{recipe.title}</h2>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-3">{recipe.summary}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Prep: {recipe.prepTime}</span>
          <span>Cook: {recipe.cookTime}</span>
        </div>
      </div>
    </Link>
  );
}
