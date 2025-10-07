import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import GalleryPage from './components/pages/GalleryPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Gallery:
        return <GalleryPage />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-comfortaa text-brand-primary"> {/* Alterado de font-sans para font-comfortaa */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;