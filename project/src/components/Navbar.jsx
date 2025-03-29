import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaUserMd className="text-2xl text-black" />
            <span className="text-xl font-semibold">MedConnect</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/forum" className="text-gray-600 hover:text-gray-900">Doctor Forum</Link>
            <Link to="/hospitals" className="text-gray-600 hover:text-gray-900">Hospital Directory</Link>
            <Link to="/consultations" className="text-gray-600 hover:text-gray-900">Online Consultations</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Log in</Link>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;