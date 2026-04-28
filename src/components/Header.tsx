// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { NavLink } from '../types/index';
import logoImg from '../assets/G.S.png';

interface HeaderProps {
  links: NavLink[];
}

export default function Header({ links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-slate-800 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* === ლოგოს სექცია შეიცვალა === */}
        <Link to="/" className="hover:opacity-80 transition-opacity duration-300" aria-label="მთავარი გვერდი">
          {/* src-ში მიუთითეთ თქვენი ფაილის ზუსტი სახელი (მაგ: /logo.png) */}
          <img 
            src={logoImg}
            alt="გიორგი საკანდელიძის ლოგო" 
            loading="eager"
            fetchpriority="high"
            // h-10 (40px) ან h-12 (48px) აკონტროლებს ლოგოს სიმაღლეს. w-auto ინარჩუნებს პროპორციას.
            className="h-10 w-auto object-contain" 
          />
        </Link>
        {/* ============================= */}

        {/* Desktop ნავიგაცია */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger ღილაკი */}
        <button 
          className="md:hidden text-slate-300 hover:text-blue-400 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="ნავიგაციის მენიუს გახსნა/დახურვა"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile ნავიგაციის მენიუ */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800 py-2 flex flex-col shadow-inner absolute w-full left-0">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors duration-200 font-medium block border-b border-slate-800/50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}