import React, { useState, useMemo } from 'react';
import { GalleryCategory, GalleryImage } from '../../types';
import Lightbox from '../Lightbox';

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery-image-01.jpg', alt: 'Mãe e filho se beijando', category: GalleryCategory.Lifestyle },
  { id: 2, src: '/images/gallery-image-02.jpg', alt: 'Mãe e filho sorrindo', category: GalleryCategory.Lifestyle },
  { id: 3, src: '/images/gallery-image-03.jpg', alt: 'Homem de uniforme militar', category: GalleryCategory.Portraits },
  { id: 4, src: '/images/gallery-image-04.jpg', alt: 'Detalhe do uniforme militar', category: GalleryCategory.Portraits },
  { id: 5, src: '/images/gallery-image-05.jpg', alt: 'Mulher de vestido listrado em pé', category: GalleryCategory.Lifestyle },
  { id: 6, src: '/images/gallery-image-06.jpg', alt: 'Mulher de vestido listrado olhando para o lado', category: GalleryCategory.Lifestyle },
  { id: 7, src: '/images/gallery-image-07.jpeg', alt: 'Mulher ruiva sorrindo com caneca', category: GalleryCategory.Portraits },
  { id: 8, src: '/images/gallery-image-08.jpeg', alt: 'Mulher ruiva sorrindo', category: GalleryCategory.Portraits },
  { id: 9, src: '/images/gallery-image-09.jpg', alt: 'Mulher de vestido listrado caminhando', category: GalleryCategory.Lifestyle },
  { id: 10, src: '/images/gallery-image-10.jpg', alt: 'Mulher de vestido listrado encostada', category: GalleryCategory.Portraits },
  { id: 11, src: '/images/gallery-image-11.jpg', alt: 'Mulher de vestido listrado entre pilares', category: GalleryCategory.Lifestyle },
  { id: 12, src: '/images/gallery-image-12.jpg', alt: 'Mãos de noiva segurando terço', category: GalleryCategory.Events },
  { id: 13, src: '/images/gallery-image-13.jpg', alt: 'Noiva com buquê', category: GalleryCategory.Events },
  { id: 14, src: '/images/gallery-image-14.jpg', alt: 'Noiva e mãe de mãos dadas', category: GalleryCategory.Events },
  { id: 15, src: '/images/gallery-image-15.jpg', alt: 'Menina de vestido branco sorrindo', category: GalleryCategory.Portraits },
  { id: 16, src: '/images/gallery-image-16.jpg', alt: 'Noiva segurando terço', category: GalleryCategory.Events },
  { id: 17, src: '/images/gallery-image-17.jpeg', alt: 'Casal de mãos dadas com anel', category: GalleryCategory.Lifestyle },
  { id: 18, src: '/images/gallery-image-18.jpeg', alt: 'Casal se abraçando e sorrindo', category: GalleryCategory.Lifestyle },
  { id: 19, src: '/images/gallery-image-19.jpeg', alt: 'Casal com testas encostadas', category: GalleryCategory.Events },
  { id: 20, src: '/images/gallery-image-20.jpeg', alt: 'Casal se beijando em ponte', category: GalleryCategory.Events },
  { id: 21, src: '/images/gallery-image-21.jpeg', alt: 'Mulher abraçando homem e sorrindo', category: GalleryCategory.Lifestyle },
  { id: 22, src: '/images/gallery-image-22.jpeg', alt: 'Casal se beijando de perto', category: GalleryCategory.Events },
];

const CategoryButton: React.FC<{
    category: GalleryCategory;
    activeCategory: GalleryCategory;
    onClick: (category: GalleryCategory) => void;
}> = ({ category, activeCategory, onClick }) => (
    <button
        onClick={() => onClick(category)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 font-comfortaa ${
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
        <h2 className="text-4xl font-comfortaa text-center mb-8 text-brand-primary">Galeria</h2>
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