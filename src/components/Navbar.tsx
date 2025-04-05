
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-light bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005A9C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
            <circle cx="20" cy="10" r="2" />
          </svg>
          <span className="text-xl font-heading font-bold text-primary">HealthVista</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-neutral-dark hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/evidence-hub"
                className="text-neutral-dark hover:text-primary transition-colors font-medium"
              >
                Evidence Hub
              </Link>
            </li>
            <li>
              <Link
                to="/innovation-pipeline"
                className="text-neutral-dark hover:text-primary transition-colors font-medium"
              >
                Innovation Pipeline
              </Link>
            </li>
            <li>
              <Link
                to="/patient-resources"
                className="text-neutral-dark hover:text-primary transition-colors font-medium"
              >
                Patient Resources
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden rounded-md p-2 text-neutral-dark hover:bg-neutral-light"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <Link
              to="/"
              className="block py-2 text-base font-medium text-neutral-dark hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/evidence-hub"
              className="block py-2 text-base font-medium text-neutral-dark hover:text-primary"
              onClick={toggleMenu}
            >
              Evidence Hub
            </Link>
            <Link
              to="/innovation-pipeline"
              className="block py-2 text-base font-medium text-neutral-dark hover:text-primary"
              onClick={toggleMenu}
            >
              Innovation Pipeline
            </Link>
            <Link
              to="/patient-resources"
              className="block py-2 text-base font-medium text-neutral-dark hover:text-primary"
              onClick={toggleMenu}
            >
              Patient Resources
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
