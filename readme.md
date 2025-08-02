# Garmin Watches - React TypeScript Project

A modern, responsive React application showcasing Garmin watches with a focus on the **Fenix Summit Edition**, built with TypeScript and Vite.

---

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Component-based architecture**
- **Netlify Functions** for serverless API
- **Video assets** for immersive hero sections

---

## 📁 Project Structure

GRAMIN-WATCHES/
├── client/
│ ├── assets/ # Static assets
│ ├── components/
│ │ └── ui/ # UI Components
│ │ ├── ExploreSection.tsx
│ │ ├── HeroSection.tsx
│ │ ├── JourneySection.tsx
│ │ ├── PreLoader.tsx
│ │ ├── SummitShowcase.tsx # Featured component
│ │ └── WatchFocusSection.tsx
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility libraries
│ └── pages/
│ ├── App.tsx # Main application
│ ├── global.css # Global styles
│ └── vite-env.d.ts # Vite type definitions
├── netlify/
│ └── functions/
│ └── api.ts # Serverless API functions
├── public/
│ ├── assets/
│ │ ├── hero_banner.mp4 # Hero video content
│ │ └── hero.mp4 # Additional hero video
│ ├── placeholder.svg
│ └── robots.txt
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript configuration
├── vite.config.js # Vite configuration
└── vite.config.ts # TypeScript Vite config


---

## 🧩 Component Architecture

### Core UI Components
- **`HeroSection.tsx`** - Landing hero with video background
- **`SummitShowcase.tsx`** - Featured Fenix Summit Edition showcase
- **`ExploreSection.tsx`** - Product exploration interface
- **`JourneySection.tsx`** - Adventure journey storytelling
- **`WatchFocusSection.tsx`** - Detailed watch features
- **`PreLoader.tsx`** - Loading experience component

---

## ✨ Key Features Showcased

### Fenix Summit Edition Highlights
- **Cold Weather Resistant**: Operates in extreme temperatures (-20°C to 60°C)
- **Waterproof**: 100m water rating for aquatic adventures
- **36-Day Battery Life**: Extended usage in smartwatch mode
- **40+ Sport Modes**: Comprehensive activity tracking
- **GPS Multi-GNSS**: Precision satellite navigation system

### Design Elements
- Dark, adventure-focused theme
- High-contrast typography for readability
- Immersive video backgrounds
- Professional product showcases

---

## 🚀 Getting Started

### Prerequisites
Node.js (v16+)
npm or yarn


### Installation & Development
Clone the repository
git clone [repository-url]
cd GRAMIN-WATCHES

Install dependencies
npm install

Start development server
npm run dev

Build for production
npm run build

Preview production build
npm run preview


---

## 🎬 Media Assets

- **`hero_banner.mp4`** - Primary hero background video
- **`hero.mp4`** - Secondary hero video
- SVG placeholders for optimized loading

---

## ⚡ Vite Configuration

- Fast Hot Module Replacement (HMR)
- TypeScript support out of the box
- Optimized production builds
- Asset optimization and bundling

---

## 🌐 Deployment

- Configured for **Netlify deployment**
- Serverless functions in `/netlify/functions/`
- Automatic builds from Git integration
- Edge function support

---

## 🎯 Component Features

- **TypeScript** for type safety and improved developer experience
- **Modular architecture** for maintainability
- **Reusable UI components** adhering to React best practices
- **Custom hooks** for shared logic
- Global styling using CSS modules approach

---

## 📱 Responsive Design

Optimized for:
- Desktop
- Tablets
- Mobile devices
- Various screen sizes and orientations

---

## 🎨 Key Messaging

- *"Built for Every Adventure"*
- *"Engineered for the moments that define you"*
- *"Adventure Awaits You Now"*
- *"Explore Your World, Day or Night"*

---

## 🤝 Contributing

Contributions are welcome! Please submit pull requests or open issues for improvements.

---

## 📄 License

This project is for educational and portfolio purposes, showcasing modern React development skills with a focus on premium product presentation.

**Note:** This is a showcase project. All product information and imagery rights belong to Garmin Ltd.
