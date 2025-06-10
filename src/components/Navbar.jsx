// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-100 p-4 shadow">
    <div className="flex gap-6">
      <Link to="/" className="text-teal-600 hover:underline">About Us</Link>
      <Link to="/products" className="text-teal-600 hover:underline">Our Products</Link>
      <Link to="/blogs" className="text-teal-600 hover:underline">Blogs </Link>
      <Link to="/career" className="text-teal-600 hover:underline">Career </Link>
    </div>
  </nav>
);

export default Navbar;
