import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          RecipeShare
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/search" className="p-2 text-gray-600 hover:text-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>
          <Link to="/add-recipe" className="btn-primary flex items-center">
            <PlusIcon className="h-5 w-5 mr-1" />
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  )
}
