import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative -mt-8 -mx-4 sm:-mx-6 lg:-mx-8 h-[calc(100vh-5rem)] flex items-center justify-center text-white">
      <div className="relative z-20 p-4 max-w-4xl w-full animate-fade-in">
        {/* Coluna de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="/images/gallery-image-01.jpg" 
            alt="Mãe e filho" 
            className="w-full h-[calc(100vh-15rem)] object-cover rounded-lg shadow-lg" 
          />
          <img 
            src="/images/gallery-image-07.jpeg" 
            alt="Mulher sorrindo com caneca" 
            className="w-full h-[calc(100vh-15rem)] object-cover rounded-lg shadow-lg" 
          />
          <img 
            src="/images/gallery-image-19.jpeg" 
            alt="Casal se beijando na ponte" 
            className="w-full h-[calc(100vh-15rem)] object-cover rounded-lg shadow-lg" 
          />
        </div>

        {/* Texto Sobreposto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50 rounded-lg">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
            Luana Dantas
          </h1>
          <p className="font-sans text-base md:text-lg lg:text-xl mt-2 tracking-widest uppercase text-gray-200">
            Fotografia
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;