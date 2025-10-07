import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative -mt-8 -mx-4 sm:-mx-6 lg:-mx-8 h-[calc(100vh-5rem)] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <img 
        src="https://picsum.photos/1920/1080?grayscale&blur=2" 
        alt="Fotografia de paisagem em preto e branco" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center p-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
          Luana Dantas
        </h1>
        <p className="font-sans text-lg md:text-xl lg:text-2xl mt-4 tracking-widest uppercase text-gray-200">
          Fotografia
        </p>
      </div>
    </div>
  );
};

export default HomePage;