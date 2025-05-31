# Muhammad Ali Siddique - Portfolio Website

A modern, developer-focused portfolio website built with React, TypeScript, and Vite. Features a terminal-inspired design with clean aesthetics and professional presentation.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with developer-focused terminal styling
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, typing effects, and hover interactions
- **Terminal Aesthetics**: Code-inspired design elements and monospace fonts
- **Performance Optimized**: Built with Vite for fast loading and development
- **TypeScript**: Type-safe development with modern React patterns

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS3 with CSS Variables, Custom Components
- **Fonts**: Inter (UI), JetBrains Mono (Code)
- **Development**: Modern ES6+, React Hooks, Responsive Design

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ali-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following sections in `src/App.tsx`:

- **Hero Section**: Change name, title, and contact information
- **About Section**: Update personal description and details
- **Experience Section**: Add your work experience
- **Projects Section**: Replace with your actual projects
- **Contact Information**: Update email and social links

### Styling
The design uses CSS variables defined in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --terminal-green: #00ff88;
  /* ... more variables */
}
```

### Content Structure

#### Skills Section
Update the `skillCategories` array in the Skills component:
```javascript
const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript'] // Your skills here
  }
  // ... more categories
];
```

#### Projects Section
Modify the `projects` array in the Projects component:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tech: ['Technology', 'Stack'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-link.com'
  }
  // ... more projects
];
```

## 📁 Project Structure

```
ali-portfolio/
├── public/             # Static assets
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles and components
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## 🎯 Sections Overview

1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero**: Introduction with terminal-style welcome message
3. **About**: Personal introduction and key information
4. **Skills**: Technical skills organized by categories
5. **Experience**: Professional work history with timeline
6. **Projects**: Featured projects with descriptions and links
7. **Contact**: Contact form and professional information
8. **Footer**: Social links and closing message

## 🌟 Key Features

- **Typing Animation**: Animated typing effect in hero section
- **Terminal Windows**: Interactive terminal-style components
- **Smooth Scrolling**: Seamless navigation between sections
- **Fade-in Animations**: Elements animate as they enter viewport
- **Professional Layout**: Clean, developer-focused design
- **Mobile Responsive**: Optimized for all screen sizes

## 🚀 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create Pull Request

## 📧 Contact

Muhammad Ali Siddique - [LinkedIn](https://www.linkedin.com/in/muhammad-ali-siddique/)

---

**Built with ❤️ using React + TypeScript + Vite**
