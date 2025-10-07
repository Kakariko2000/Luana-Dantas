
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log({ name, email, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center animate-fade-in">
        <h2 className="text-4xl font-serif text-center mb-4 text-brand-primary">Obrigada!</h2>
        <p className="text-brand-secondary">Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 animate-fade-in">
      <h2 className="text-4xl font-serif text-center mb-4 text-brand-primary">Contato</h2>
      <p className="text-center text-brand-secondary mb-12">
        Adoraria saber mais sobre seu projeto. Preencha o formulário abaixo para entrarmos em contato.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-secondary mb-1">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 bg-brand-bg border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-secondary mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-brand-bg border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-secondary mb-1">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 bg-brand-bg border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
