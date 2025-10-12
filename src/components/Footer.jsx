import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Lamara Razane</h3>
            <p className="text-gray-400 leading-relaxed">
              Développeuse passionnée et enseignante expérimentée, spécialisée en 
              développement web et mobile. Toujours à la recherche de nouveaux défis 
              et opportunités d'apprentissage.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '#accueil', label: 'Accueil' },
                { href: '#apropos', label: 'À propos' },
                { href: '#competences', label: 'Compétences' },
                { href: '#projets', label: 'Projets' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Constantine, Algérie</p>
              <a 
                href="mailto:razane.lamara@univ-constantine2.dz"
                className="hover:text-primary transition-colors block"
              >
                razane.lamara@univ-constantine2.dz
              </a>
              <a 
                href="tel:+213774094989"
                className="hover:text-primary transition-colors block"
              >
                07.74.09.49.89
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Développé avec</span>
              <Heart className="w-4 h-4 text-primary mx-2" />
              <span>par Lamara Razane</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lamara Razane. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

