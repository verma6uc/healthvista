
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-neutral-light py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <span className="text-lg font-heading font-bold text-primary">HealthVista</span>
            </div>
            <p className="text-sm text-neutral-medium">
              HealthVista provides clear, evidence-based information on pharmaceutical solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-dark mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-medium hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/evidence-hub" className="text-neutral-medium hover:text-primary transition-colors">
                  Evidence Hub
                </Link>
              </li>
              <li>
                <Link to="/innovation-pipeline" className="text-neutral-medium hover:text-primary transition-colors">
                  Innovation Pipeline
                </Link>
              </li>
              <li>
                <Link to="/patient-resources" className="text-neutral-medium hover:text-primary transition-colors">
                  Patient Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-dark mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-neutral-medium hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-neutral-medium hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-neutral-medium hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-dark mb-4">
              Contact
            </h3>
            <address className="not-italic text-neutral-medium">
              <p>123 Pharma Street</p>
              <p>Science City, SC 12345</p>
              <p className="mt-3">contact@healthvista.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 border-t border-neutral-light pt-8 text-center text-sm text-neutral-medium">
          <p>&copy; {currentYear} HealthVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
