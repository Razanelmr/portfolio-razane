import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À propos' },
    { href: '#competences', label: 'Compétences' },
    { href: '#projets', label: 'Projets' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">LR</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CV Download Button */}
          <div className="hidden md:block">
<<<<<<< HEAD
            <a
                href="/portfolio-razane/Cv-LAMARARAZANE.pdf"
                download="CV-Lamara-Razane.pdf"
                className="hidden md:block"
              >
                <Button className="btn-primary">
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
              </a>

=======
            <Button 
              className="btn-primary"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/src/assets/Cv-LAMARARAZANE(1).pdf';
                link.download = 'CV-Lamara-Razane.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
>>>>>>> 7393c60a9909dd65ce7cafd63a841f519f63a65f
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="btn-primary w-full mt-4"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/src/assets/Cv-LAMARARAZANE(1).pdf';
                  link.download = 'CV-Lamara-Razane.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

