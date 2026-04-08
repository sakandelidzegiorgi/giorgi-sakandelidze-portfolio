// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { NavLink } from '../types/index';

interface HeaderProps {
  links: NavLink[];
}

export default function Header({ links }: HeaderProps) {
  // მობილური მენიუს სტეიტი
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ლოგო */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Logo.
        </Link>

        {/* Desktop ნავიგაცია */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger ღილაკი */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile ნავიგაციის მენიუ (იხსნება ღილაკზე დაჭერით) */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t pb-4 px-4 flex flex-col space-y-3 pt-3">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="text-gray-600 hover:text-blue-600 font-medium block"
              onClick={() => setIsOpen(false)} // ლინკზე დაჭერისას მენიუ დაიკეტოს
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}