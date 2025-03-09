import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-recipe">Add Recipe</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/recommendations">Recommendations</Link>
    </nav>
  );
};

export default Navbar;
