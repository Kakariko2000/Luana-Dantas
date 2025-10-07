
export enum Page {
  Home = 'Início',
  Gallery = 'Galeria',
  About = 'Sobre',
  Contact = 'Contato'
}

export enum GalleryCategory {
  Portraits = 'Retratos',
  Lifestyle = 'Lifestyle',
  Events = 'Eventos'
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}
