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
  // Novas imagens adicionadas
  { id: 23, src: '/images/IMG_0745.jpg', alt: 'Família em evento de casamento', category: GalleryCategory.Events },
  { id: 24, src: '/images/IMG_0754.jpg', alt: 'Família em momento de carinho em evento', category: GalleryCategory.Events },
  { id: 25, src: '/images/IMG_0908-2.jpg', alt: 'Noivos se beijando com buquê', category: GalleryCategory.Events },
  { id: 26, src: '/images/IMG_0914.jpg', alt: 'Noivos sorrindo para a câmera', category: GalleryCategory.Events },
  { id: 27, src: '/images/IMG_0958.jpg', alt: 'Detalhe das mãos dos noivos com alianças', category: GalleryCategory.Events },
  { id: 28, src: '/images/IMG_0961.jpg', alt: 'Noivos se beijando com buquê em destaque', category: GalleryCategory.Events },
  { id: 29, src: '/images/IMG_1265.jpg', alt: 'Mulher sorrindo com confetes caindo', category: GalleryCategory.Portraits },
  { id: 30, src: '/images/IMG_1293.jpg', alt: 'Mulher deitada com confetes e sinal de paz', category: GalleryCategory.Portraits },
  { id: 31, src: '/images/IMG_1438.jpg', alt: 'Mulher sorrindo e se inclinando', category: GalleryCategory.Portraits },
  { id: 32, src: '/images/IMG_1462.jpg', alt: 'Mulher sorrindo e posando', category: GalleryCategory.Portraits },
  { id: 33, src: '/images/IMG_1470.jpg', alt: 'Mulher sorrindo e gesticulando', category: GalleryCategory.Portraits },
  { id: 34, src: '/images/IMG_2733.jpg', alt: 'Homem de terno sentado', category: GalleryCategory.Portraits },
  { id: 35, src: '/images/IMG_2737-2.jpg', alt: 'Homem de terno ajustando relógio (P&B)', category: GalleryCategory.Portraits },
  { id: 36, src: '/images/IMG_2771-2.jpg', alt: 'Homem de terno em pé', category: GalleryCategory.Portraits },
  { id: 37, src: '/images/IMG_2788.jpg', alt: 'Homem de terno em pé com as mãos nos bolsos', category: GalleryCategory.Portraits },
  { id: 38, src: '/images/IMG_2964.jpg', alt: 'Homem de terno e gravata vermelha', category: GalleryCategory.Portraits },
  { id: 39, src: '/images/IMG_2970-2.jpg', alt: 'Homem de terno e gravata vermelha encostado', category: GalleryCategory.Portraits },
  { id: 40, src: '/images/IMG_2978.jpg', alt: 'Homem de terno e gravata vermelha olhando para o lado', category: GalleryCategory.Portraits },
  { id: 41, src: '/images/IMG_3161-Aprimorado-NR.jpg', alt: 'Homem com luz azul na mão', category: GalleryCategory.Lifestyle },
  { id: 42, src: '/images/IMG_3209.jpg', alt: 'Homem de camisa vermelha sentado', category: GalleryCategory.Portraits },
  { id: 43, src: '/images/IMG_3219.jpg', alt: 'Homem de camisa vermelha posando', category: GalleryCategory.Portraits },
  { id: 44, src: '/images/IMG_3249.jpg', alt: 'Homem segurando aparelho estético', category: GalleryCategory.Portraits },
  { id: 45, src: '/images/IMG_3359.jpg', alt: 'Homem de camisa vermelha sorrindo', category: GalleryCategory.Portraits },
  { id: 46, src: '/images/IMG_5765-Editar.jpg', alt: 'Mulher sorrindo com a mão no queixo', category: GalleryCategory.Portraits },
  { id: 47, src: '/images/IMG_5817.jpg', alt: 'Mulher sorrindo e olhando para o lado', category: GalleryCategory.Portraits },
  { id: 48, src: '/images/IMG_5843.jpg', alt: 'Mulher com braços cruzados e sorrindo', category: GalleryCategory.Portraits },
  { id: 49, src: '/images/IMG_5848.jpg', alt: 'Mulher com braços cruzados e expressão séria', category: GalleryCategory.Portraits },
  { id: 50, src: '/images/IMG_8991.jpg', alt: 'Mulher grávida encostada em árvore', category: GalleryCategory.Lifestyle },
  { id: 51, src: '/images/IMG_9090.jpg', alt: 'Casal grávido em silhueta ao pôr do sol', category: GalleryCategory.Lifestyle },
  { id: 52, src: '/images/IMG_9459(1).jpg', alt: 'Menina sorrindo para a câmera', category: GalleryCategory.Portraits },
  { id: 53, src: '/images/IMG_9561(1).jpg', alt: 'Menina sentada em deck à beira do lago', category: GalleryCategory.Lifestyle },
  { id: 54, src: '/images/IMG_9590(1).jpg', alt: 'Menina sorrindo à beira do lago', category: GalleryCategory.Lifestyle },
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