import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in">
      <h2 className="text-4xl font-serif text-center mb-12 text-brand-primary">Sobre Mim</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="w-full md:w-1/3">
          <img 
            src="https://picsum.photos/id/1005/500/500" 
            alt="Retrato da fotógrafa Luana Dantas"
            className="rounded-full aspect-square object-cover shadow-lg mx-auto"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left text-brand-secondary leading-relaxed">
          <p className="mb-4">
            Me chamo Luana Dantas, tenho 33 anos e a fotografia é minha paixão desde que me entendo por gente.
          </p>
          <p className="mb-4">
            Sou apaixonada por capturar emoções verdadeiras e transformar momentos simples em memórias eternas. Acredito que cada olhar, gesto ou detalhe conta uma história, e é através da minha lente que elas ganham vida. Meu propósito é registrar com sensibilidade, leveza e autenticidade tudo aquilo que merece ser lembrado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;