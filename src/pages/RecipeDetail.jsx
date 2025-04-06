import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-primary mb-2">{recipe.title}</h1>
          <div className="flex space-x-4 text-gray-500 mb-6">
            <span>Prep: {recipe.prepTime}</span>
            <span>Cook: {recipe.cookTime}</span>
          </div>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>
          <button className="btn-primary">Save Recipe</button>
        </div>
      </div>
    </div>
  );
}
