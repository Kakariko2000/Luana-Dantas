import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-offwhite py-6 mt-8 border-t border-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialIcon href="https://instagram.com/luanadantasfotografia">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </SocialIcon>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Luana Dantas Fotografia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;