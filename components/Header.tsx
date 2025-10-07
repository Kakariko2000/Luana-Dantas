import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, onClick }) => (
  <button
    onClick={() => {
      setCurrentPage(page);
      if (onClick) onClick();
    }}
    className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
      currentPage === page
        ? 'text-brand-primary font-semibold'
        : 'text-brand-secondary hover:text-brand-primary'
    }`}
  >
    {page}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-brand-offwhite bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="cursor-pointer"
            onClick={() => setCurrentPage(Page.Home)}
          >
            <img 
              src="/logotipo-cmyk-06.png" 
              alt="Luana Dantas Fotografia" 
              className="h-10 md:h-12" 
            />
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {Object.values(Page).map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-primary focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-offwhite pb-4">
          <nav className="flex flex-col items-center">
            {Object.values(Page).map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => setIsMenuOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;