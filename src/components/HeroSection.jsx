import { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Développeuse Web & Mobile",
    "Enseignante en Informatique",
    "Spécialiste Réseaux & Systèmes"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-section min-h-screen flex items-center justify-center relative">
      {/* Formes géométriques décoratives */}
      <div className="geometric-shape w-20 h-20 top-20 left-10 rotate-45 hidden lg:block"></div>
      <div className="geometric-shape w-16 h-16 top-40 right-20 rotate-12 hidden lg:block"></div>
      <div className="geometric-shape w-12 h-12 bottom-40 left-20 rotate-45 hidden lg:block"></div>
      <div className="geometric-shape w-24 h-24 bottom-20 right-10 rotate-12 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Lamara <span className="text-gradient">Razane</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 transition-all duration-500">
              {texts[currentText]}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionnée par l'informatique et l'enseignement, je crée des solutions 
            innovantes en développement web et mobile tout en formant la prochaine 
            génération de développeurs.
          </p>

          {/* Compétences principales en icônes */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/30 transition-colors">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400">Développement</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/30 transition-colors">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400">Réseaux</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/30 transition-colors">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400">Design</span>
            </div>
          </div>

          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="btn-primary text-lg px-8 py-3"
          >
            Découvrir mes projets
          </Button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

