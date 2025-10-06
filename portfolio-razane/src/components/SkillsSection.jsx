import { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Monitor, Server, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programmation",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "Dart", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 85 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Flutter", level: 80 },
        { name: "Android Studio", level: 75 },
        { name: "React Native", level: 70 }
      ]
    },
    {
      title: "Réseaux & Systèmes",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "CCNA", level: 85 },
        { name: "Packet Tracer", level: 90 },
        { name: "Systèmes Distribués", level: 80 },
        { name: "Administration Réseau", level: 75 }
      ]
    },
    {
      title: "Design & Outils",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Photoshop", level: 85 },
        { name: "Illustrator", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Git", level: 85 }
      ]
    },
    {
      title: "Bureautique",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "Excel Avancé", level: 85 },
        { name: "PowerPoint", level: 90 }
      ]
    }
  ];

  return (
    <section id="competences" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Compétences</h2>
          <div className="section-divider w-24 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise technique diversifiée acquise à travers mes études et mon expérience professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              
              {
                title: "Introduction to Networks",
                driveLink: "https://drive.google.com/file/d/1jNlPi1XImTvYVIGj0iCvipL0VRequUxc/view?usp=drive_link"
              },
              
              {
                title: "Routing and Switching",
                driveLink: "https://drive.google.com/file/d/17OOV5rOl1S04Qe8vZIzDiadGcgCu4cQy/view?usp=drive_link"
              },
              {
                title: "Scaling Networks",
                driveLink: "https://drive.google.com/file/d/1mhQWfWz1kLZICxxf5Z_GxZkrgOiCP721/view?usp=drive_link"
              },
              {
                title: "Connecting Networks",
                driveLink: "https://drive.google.com/file/d/1mDF9d93Xo9DKE3Zrnixkr-QpIw_Ske-P/view?usp=drive_link"
              }
              
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-primary to-red-500 text-white p-4 rounded-lg text-center flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold">{cert.title}</div>
                  <div className="text-xs opacity-90 mt-1 mb-4">ITM Studya, Constantine</div>
                </div>
                <a 
                  href={cert.driveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-white text-primary font-semibold text-xs px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  Voir certificat
                </a>
              </div>
            ))}
          </div>
        </div>


        {/* Méthodologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Méthodologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Agile", "Scrum", "Git Flow", "Test-Driven Development"].map((method, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

