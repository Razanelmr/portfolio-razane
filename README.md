# Portfolio Professionnel - Lamara Razane

Un site web portfolio moderne et responsive développé avec React, Tailwind CSS et des composants UI modernes.

## 🎨 Design

- **Palette de couleurs** : Noir, Rouge (#DC143C), Blanc
- **Style** : Moderne, minimaliste, graphique
- **Responsive** : Compatible desktop, tablette et mobile
- **Animations** : Transitions fluides et effets au scroll

## 🚀 Fonctionnalités

- ✅ Navigation fixe avec scroll fluide
- ✅ Section Hero avec animation de texte
- ✅ Section À propos avec photo professionnelle
- ✅ Compétences avec barres de progression animées
- ✅ Portfolio de projets avec filtres par catégorie
- ✅ Formulaire de contact fonctionnel
- ✅ Téléchargement du CV en PDF
- ✅ Footer avec navigation rapide

## 📁 Structure du projet

```
portfolio-razane/
├── public/
├── src/
│   ├── assets/
│   │   ├── profile-photo.jpg      # Photo professionnelle
│   │   └── Cv-LAMARARAZANE(1).pdf # CV téléchargeable
│   ├── components/
│   │   ├── Navigation.jsx         # Barre de navigation
│   │   ├── HeroSection.jsx        # Section d'accueil
│   │   ├── AboutSection.jsx       # Section à propos
│   │   ├── SkillsSection.jsx      # Section compétences
│   │   ├── ProjectsSection.jsx    # Section projets
│   │   ├── ContactSection.jsx     # Section contact
│   │   └── Footer.jsx             # Pied de page
│   ├── App.jsx                    # Composant principal
│   └── App.css                    # Styles personnalisés
└── README.md
```

## 🛠️ Installation et développement

### Prérequis
- Node.js (version 18+)
- pnpm (ou npm)

### Installation
```bash
cd portfolio-razane
pnpm install
```

### Développement
```bash
pnpm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
pnpm run build
```

## ✏️ Personnalisation

### Modifier les informations personnelles

1. **Informations de contact** : Éditez `src/components/ContactSection.jsx`
2. **Parcours professionnel** : Modifiez `src/components/AboutSection.jsx`
3. **Compétences** : Ajustez les données dans `src/components/SkillsSection.jsx`
4. **Projets** : Mettez à jour le tableau `projects` dans `src/components/ProjectsSection.jsx`

### Ajouter de nouveaux projets

Dans `src/components/ProjectsSection.jsx`, ajoutez un nouvel objet au tableau `projects` :

```javascript
{
  id: 7,
  title: "Nouveau Projet",
  description: "Description du projet...",
  technologies: ["React", "Node.js"],
  category: "web", // web, mobile, backend, network
  github: "https://github.com/...",
  demo: "https://demo.com",
  featured: false
}
```

### Modifier les couleurs

Les couleurs principales sont définies dans `src/App.css` :
- `--primary: #DC143C` (Rouge principal)
- `--secondary: #1a1a1a` (Gris foncé)
- `--background: #ffffff` (Blanc)

### Changer la photo de profil

Remplacez le fichier `src/assets/profile-photo.jpg` par votre nouvelle photo.

### Mettre à jour le CV

Remplacez le fichier `src/assets/Cv-LAMARARAZANE(1).pdf` par votre CV mis à jour.

## 🌐 Déploiement

### Déploiement automatique
Le site peut être déployé sur diverses plateformes :

- **Vercel** : Connectez votre repository GitHub
- **Netlify** : Glissez-déposez le dossier `dist/` après build
- **GitHub Pages** : Utilisez GitHub Actions

### Déploiement manuel
1. Buildez le projet : `pnpm run build`
2. Le dossier `dist/` contient les fichiers statiques
3. Uploadez le contenu sur votre serveur web

## 📱 Responsive Design

Le site est optimisé pour :
- **Desktop** : 1024px et plus
- **Tablette** : 768px - 1023px
- **Mobile** : 320px - 767px

## 🎯 SEO et Performance

- Balises meta optimisées
- Images optimisées
- Code splitting automatique avec Vite
- CSS minifié en production

## 🔧 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Shadcn/ui** - Composants UI

## 📞 Support

Pour toute question ou modification, contactez :
- Email : razane.lamara@univ-constantine2.dz
- Téléphone : 07.74.09.49.89

---

**Développé avec ❤️ par Lamara Razane**

