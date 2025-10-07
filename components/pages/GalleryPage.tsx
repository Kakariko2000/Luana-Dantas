import React, { useState, useMemo } from 'react';
import { GalleryCategory, GalleryImage } from '../../types';
import Lightbox from '../Lightbox';

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/id/1027/800/1200', alt: 'Retrato de mulher', category: GalleryCategory.Portraits },
  { id: 2, src: 'https://picsum.photos/id/237/800/600', alt: 'Cachorro em preto e branco', category: GalleryCategory.Lifestyle },
  { id: 3, src: 'https://picsum.photos/id/1040/800/1200', alt: 'Casal em evento', category: GalleryCategory.Events },
  { id: 4, src: 'https://picsum.photos/id/1025/800/600', alt: 'Retrato de homem', category: GalleryCategory.Portraits },
  { id: 5, src: 'https://picsum.photos/id/106/800/1200', alt: 'Cena de café', category: GalleryCategory.Lifestyle },
  { id: 6, src: 'https://picsum.photos/id/10/800/600', alt: 'Festa de aniversário', category: GalleryCategory.Events },
  { id: 7, src: 'https://picsum.photos/id/342/800/600', alt: 'Pessoa lendo livro', category: GalleryCategory.Lifestyle },
  { id: 8, src: 'https://picsum.photos/id/433/800/1200', alt: 'Retrato sorrindo', category: GalleryCategory.Portraits },
  { id: 9, src: 'https://picsum.photos/id/659/800/600', alt: 'Concerto', category: GalleryCategory.Events },
  { id: 10, src: 'https://picsum.photos/id/836/800/1200', alt: 'Retrato sério', category: GalleryCategory.Portraits },
  { id: 11, src: 'https://picsum.photos/id/988/800/600', alt: 'Piquenique no parque', category: GalleryCategory.Lifestyle },
  { id: 12, src: 'https://picsum.photos/id/975/800/1200', alt: 'Casamento', category: GalleryCategory.Events },
];

const CategoryButton: React.FC<{
    category: GalleryCategory;
    activeCategory: GalleryCategory;
    onClick: (category: GalleryCategory) => void;
}> = ({ category, activeCategory, onClick }) => (
    <button
        onClick={() => onClick(category)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
                ? 'bg-brand-primary text-white shadow-md'
                : 'bg-brand-bg text-brand-secondary hover:bg-brand-accent hover:text-white'
        }`}
    >
        {category}
    </button>
);

const getMosaicClass = (index: number): string => {
  const pattern = index % 11;
  switch (pattern) {
    case 0: return 'md:col-span-2 md:row-span-2';
    case 5: return 'md:col-span-2';
    case 8: return 'md:row-span-2';
    default: return 'col-span-1 row-span-1';
  }
};

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(GalleryCategory.Portraits);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    return galleryImages.filter(image => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="animate-fade-in">
        <h2 className="text-4xl font-serif text-center mb-8 text-brand-primary">Galeria</h2>
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12">
          {Object.values(GalleryCategory).map(category => (
            <CategoryButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group overflow-hidden rounded-lg shadow-md cursor-pointer ${getMosaicClass(index)}`}
              onClick={() => setSelectedImage(image)}
            >
               <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
               />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Lightbox 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryPage;