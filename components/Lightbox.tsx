import React, { useEffect } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Impede a rolagem do corpo enquanto o Lightbox estiver aberto
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Fecha o lightbox apenas se o clique for no próprio backdrop (event.target)
    // e não em um de seus filhos (como a imagem).
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex justify-center items-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative max-w-xl max-h-[90vh] w-full"
      >
        <img src={src} alt={alt} className="object-contain w-full h-full rounded-lg" />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:top-2 md:right-2 text-white bg-brand-primary rounded-full w-8 h-8 flex items-center justify-center text-2xl hover:bg-brand-secondary transition-colors"
          aria-label="Fechar imagem"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;