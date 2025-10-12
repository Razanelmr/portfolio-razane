import { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, FileVideo2, Film, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Application Mobile 'Mourafe9i'",
      description: "Mourafe9i est une application mobile qui met en relation les parents d’enfants malades avec des accompagnatrices qualifiées et fiables. Elle offre une solution numérique pratique et sécurisée pour accompagner les enfants lors de leurs soins, répondant ainsi à un besoin essentiel pour de nombreuses familles.",
      image: "/mourafi9i.png",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      github: "https://www.canva.com/design/DAGeLS7m-t0/DYHOnFJxO4ZhtW_KS-BCpg/view?mode=prototype",
      demo: "https://drive.google.com/file/d/1gQCjkeZ6GKYPx9kgoDOUfeIL5jZfR3oI/view?usp=drive_link",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Interactif",
      description: "Création de sites web portfolio numériques interactifs, conçus pour offrir une expérience utilisateur immersive, avec un design moderne et responsive, une navigation fluide, des animations dynamiques, et une présentation visuelle soignée des compétences, projets et services afin de captiver l’attention et valoriser l’identité professionnelle.",
      image: "/website.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      category: "web",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 3,
      title: "App Mobile 'Tari9i'",
      description: "Tari9i est l’application idéale pour réserver facilement une place dans un trajet collectif et partagé à petit prix, que ce soit pour aller au travail, rejoindre l’université ou effectuer vos déplacements réguliers en toute simplicité. Grâce à une interface intuitive, un système de réservation rapide et des trajets optimisés, Tari9i facilite la mobilité quotidienne tout en favorisant le transport collaboratif et économique.",
      image : "/tari9i.png",
      technologies: ["Flutter", "Firebase", "Dart", "MAPs"],
      category: "mobile",
      github: "https://github.com/Razanelmr/Tari9i.git",
      demo: "https://drive.google.com/file/d/1HdU8r1UBqRt2noSviyQKz97X_xO1U2hp/view?usp=drive_link",
      featured: true
    },
    {
      id: 4,
      title: "App Mobile 'Tari9iPro'",
      description: "Tari9iPro est une application conçue pour les chauffeurs professionnels, offrant toutes les fonctionnalités essentielles telles que l'inscription, la gestion des trajets (lieu de départ, destination, horaire, prix, nombre de places), le suivi des réservations, le paiement en ligne et l'historique des trajets effectués.",
      image: "/tari9ipro.png",
      technologies: ["Flutter", "Firebase", "Dart", "MAPs"],
      category: "mobile",
      github: "https://github.com/Razanelmr/tari9pro.git",
      demo: "https://drive.google.com/file/d/1kfbkjKWQLW17x-gBLhv4RkX9DiOl-xFI/view?usp=drive_link",
      featured: true
    },
    {
      id: 5,
      title: "Application Mobile 'PTU' ",
      description: "PTU est une application mobile destinée aux élèves, leur permettant de suivre facilement leurs cours, consulter leur emploi du temps, accéder à leur carte d'étudiant, voir leurs notes et moyennes. Les enseignants peuvent ajouter des cours, et les étudiants peuvent les consulter en temps réel. L'application facilite la communication et la gestion pédagogique au sein de l'établissement.",
      image: "/PTU.png",
      technologies: ["Flutter", "Firebase", "Dart"],
      category: "mobile",
      github: "https://github.com/Razanelmr/E-learning_Project_Flutter.git",
      demo: "https://drive.google.com/file/d/1wjbrPA5I0zkC2riTvYIpfUPr-SHLl0fH/view?usp=drive_link",
      featured: false
    },
    {
      id: 6,
      title: "Social media Video",
      description: "Création de vidéos courtes, dynamiques et engageantes, spécialement conçues pour les plateformes sociales comme Instagram, TikTok, Facebook et YouTube Shorts. Chaque vidéo est pensée pour attirer l’attention dès les premières secondes, transmettre un message clair et renforcer l’identité de marque, tout en s’appuyant sur les tendances actuelles.",
      image: "/makeit.jpg",
      technologies: ["CapCut", "Canva"],
      category: "Video",
      github: "#",
      demo: "https://drive.google.com/drive/folders/15amgc9V9Dc68JuOPRMXFPhYGTROCyXHy?usp=sharing",
      featured: true
    },

    {
      id: 7,
      title: "Social Media Post",
      description: "Création de visuels percutants et harmonieux pour les réseaux sociaux (Instagram, Facebook, LinkedIn, etc.). 🎨 Chaque post est conçu pour attirer l’attention, transmettre un message clair et renforcer l’identité visuelle de la marque.",
      image: "/SocialMedia.jpg",
      technologies: ["PhotoShop", "Illustrator", "Canva"],
      category: "Post",
      github: "#",
      demo: "https://drive.google.com/drive/folders/1n5ZVIqdV-xUPbY4iL1mWqSXSWgC0ktr8?usp=sharing",
      featured: true
    }

  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: <Code className="w-4 h-4" /> },
    { id: 'web', label: 'Web', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'Video', label: 'Video', icon: <Film className="w-4 h-4" /> },
    { id: 'Post', label: 'Post', icon: <Images className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-100 text-blue-800',
      'Django': 'bg-green-100 text-green-800',
      'Flutter': 'bg-cyan-100 text-cyan-800',
      'Python': 'bg-yellow-100 text-yellow-800',
      'JavaScript': 'bg-orange-100 text-orange-800',
      'PostgreSQL': 'bg-indigo-100 text-indigo-800',
      'Firebase': 'bg-red-100 text-red-800',
      'FastAPI': 'bg-teal-100 text-teal-800',
      'CapCut': 'bg-teal-100 text-black-800',
      'Canva': 'bg-yellow-100 text-yellow-800',
      'PhotoShop': 'bg-blue-100 text-blue-800',
      'Illustrator': 'bg-teal-100 text-black-800',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <div className="section-divider w-24 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations en développement web, mobile et systèmes
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span className="ml-2 font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Image du projet */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Projet Phare
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.category === 'web' || project.category === 'mobile') && (
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 btn-primary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    </div>
                )}

                {(project.category === 'Video' || project.category === 'Post') && (
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="flex-1 btn-primary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    </div>
                )}


                
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Intéressé par mes projets ? Contactez-moi pour discuter de vos besoins.
          </p>
          <Button 
            size="lg"
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Me Contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

