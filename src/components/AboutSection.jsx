import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      year: "2020 - 2022",
      title: "Master 2 en Informatique",
      institution: "Université Constantine 2",
      description: "Spécialisation en Réseaux et Systèmes Distribués"
    },
    {
      year: "2017 - 2020",
      title: "Licence en Informatique",
      institution: "Université Constantine 2",
      description: "Formation complète en informatique générale"
    }
  ];

  const experience = [
    
    {
      year: "2022 - Présent",
      title: "Gérante d’établissement",
      company: "2Nice School",
      description: "Responsable du recrutement, de l’encadrement et de la formation des nouveaux employés afin d’assurer leur intégration et leur montée en compétences."
    },
    {
      year: "2024 - Présent",
      title: "Enseignante Spécialisée",
      company: "ArchimedPro",
      description: "Formation en développement web et mobile pour étudiants S1-S4"
    },
    {
      year: "2024 - 2025",
      title: "Enseignante Vacataire",
      company: "Institut Karisma coaching",
      description: "Enseignement de l'informatique générale et du Base De Donnée"
    },
    {
      year: "2024 - 2025",
      title: "Enseignante Vacataire",
      company: "AspireUp Academy",
      description: "Enseignement de l'informatique générale et du Base De Donnée"
    },
    {
      year: "2022 - 2025",
      title: "Enseignante Vacataire",
      company: "Institut National de Formation Professionnelle",
      description: "Enseignement de l'informatique générale et du développement web/mobile"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Présentation personnelle */}
          <div className="space-y-6">
            {/* Photo professionnelle */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="public/profile-photo.jpg" 
                  alt="Lamara Razane - Photo professionnelle"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lamara Razane</h3>
              <p className="text-primary font-medium mb-4">Développeuse & Enseignante</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mon parcours</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify" >
                Passionnée depuis toujours par l’informatique et animée par le désir de transmettre mon savoir, je suis une enseignante expérimentée, spécialisée dans le développement web et mobile. Mon parcours professionnel s’est construit au fil des années à travers diverses expériences formatrices, me permettant d’acquérir une expertise approfondie en réseaux, en systèmes distribués ainsi qu’en conception et développement d'applications. Grâce à cette polyvalence technique, je m'efforce de proposer à mes apprenants un enseignement riche.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Mon engagement dépasse la simple transmission de connaissances : je m’applique à rendre chaque cours vivant, interactif et ancré dans la réalité professionnelle. J’ai à cœur de créer un environnement d’apprentissage motivant, où la rigueur scientifique côtoie la créativité et l’innovation. Mon objectif est clair : inspirer et former les futures générations de professionnels de l’informatique.
              </p>
              

              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Constantine, Algérie
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  25 ans
                </div>
              </div>
            </div>

            {/* Langues */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Langues</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Arabe</span>
                  <span className="text-primary font-medium">Natif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Français</span>
                  <span className="text-primary font-medium">Courant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Anglais</span>
                  <span className="text-primary font-medium">Intermédiaire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Éducation et Expérience */}
          <div className="space-y-8">
            {/* Éducation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Éducation</h3>
              </div>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="text-sm text-primary font-medium mb-1">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expérience */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Expérience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="text-sm text-primary font-medium mb-1">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.company}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

