import { Link } from "react-router-dom";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Home Link */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        SnipApps
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        {/* Dropdown Menu */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600">
            Recent Apps ▾
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2 z-10">
            <Link to="/app1" className="block px-4 py-2 hover:bg-gray-100">
              App 1
            </Link>
            <Link to="/app2" className="block px-4 py-2 hover:bg-gray-100">
              App 2
            </Link>
          </div>
        </div>

        {/* Browse Link */}
        <Link to="/browse" className="text-gray-700 hover:text-blue-600">
          Browse Apps
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
