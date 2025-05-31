import { useState, useEffect } from 'react'

// Navigation Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">Muhammad Ali Siddique</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['AI Developer', 'Python Expert', 'ML Engineer', 'Data Scientist'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < role.length) {
        setTypedText(role.substring(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Muhammad Ali Siddique</span>
          </h1>
          
          <p className="hero-subtitle">
            <span className="typing">{typedText}</span>
            <span className="terminal-cursor"></span>
            {' '}passionate about building intelligent systems that solve real-world problems
          </p>

          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="code-title">~/portfolio/intro.py</div>
            </div>
            <div className="code-content">
              <div><span className="code-keyword">class</span> <span className="code-string">AIDeveloper</span>:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">def</span> __init__(self):</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-string">"Muhammad Ali Siddique"</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="code-string">"AI Developer & Python Expert"</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.location = <span className="code-string">"Lahore, Pakistan"</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.skills = [<span className="code-string">"Machine Learning"</span>, <span className="code-string">"Deep Learning"</span>, <span className="code-string">"Python"</span>]</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.passion = <span className="code-string">"Building intelligent solutions"</span></div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#projects" className="btn btn-secondary">View my work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About</div>
          <h2 className="section-title">Building the Future with AI</h2>
          <p className="section-description">
          </p>
        </div>
        
        <div className="grid grid-2">
          <div className="card fade-in">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">Educational Foundation</h3>
            <p className="card-description">
              I hold a Bachelor's degree in Electrical Engineering from FAST NUCES, Lahore (2019-2023). 
              My engineering background provides me with a strong analytical mindset and problem-solving 
              approach that I apply to AI and machine learning challenges.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="card-icon">🤖</div>
            <h3 className="card-title">AI/ML Specialization</h3>
            <p className="card-description">
              I specialize in developing cutting-edge AI solutions, from chatbot development to 
              generative AI applications. My expertise includes prompt engineering, RAG systems, 
              fine-tuning LLMs, and integrating AI models into production applications.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="card-icon">🐍</div>
            <h3 className="card-title">Full-Stack Development</h3>
            <p className="card-description">
              With strong Python backend skills and modern web technologies, I build end-to-end 
              AI applications. From Flask and FastAPI backends to React frontends, I create 
              complete solutions that seamlessly integrate AI capabilities.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Vector & Data Expertise</h3>
            <p className="card-description">
              I work extensively with vector databases like Qdrant, Pinecone, and ChromaDB for 
              RAG applications. My data handling skills with NumPy, Pandas, and NLP libraries 
              enable me to preprocess and optimize data for AI model training and inference.
            </p>
          </div>
        </div>
        
        <div className="code-block fade-in" style={{marginTop: '3rem'}}>
          <div className="code-header">
            <div className="code-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="code-title">~/education/degree.json</div>
          </div>
          <div className="code-content">
            <div>&#123;</div>
            <div>&nbsp;&nbsp;<span className="code-keyword">"degree"</span>: <span className="code-string">"Bachelor of Science in Electrical Engineering"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-keyword">"university"</span>: <span className="code-string">"FAST NUCES, Lahore"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-keyword">"duration"</span>: <span className="code-string">"August 2019 – December 2023"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-keyword">"specialization"</span>: <span className="code-string">"AI/ML Applications"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-keyword">"current_focus"</span>: <span className="code-string">"Generative AI & LLM Integration"</span></div>
            <div>&#125;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'Vanilla JavaScript', 'TypeScript']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      title: 'Vector Databases',
      icon: '🎯',
      skills: ['Qdrant', 'Pinecone', 'ChromaDB', 'Weaviate']
    },
    {
      title: 'Data Handling & Analysis',
      icon: '📊',
      skills: ['NumPy', 'Pandas', 'SpaCy', 'NLTK']
    },
    {
      title: 'Data Visualization',
      icon: '📈',
      skills: ['Matplotlib', 'GoJS', 'Mermaid-JS']
    },
    {
      title: 'Development',
      icon: '⚡',
      skills: ['Agile Software Development', 'Web Application Development']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'Postman', 'AWS', 'GitHub Actions', 'Redis', 'Celery', 'Microsoft Azure']
    },
    {
      title: 'AI & Specialized Skills',
      icon: '🤖',
      skills: ['Code Optimization', 'Generative AI', 'Chatbot Development', 'Prompt Engineering', 'Data Pre-Processing', 'RAG', 'Fine Tuning']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Technologies and tools I use to bring AI solutions to life
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in">
              <h3 className="skill-category-title">
                {category.icon} {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Engineer',
      company: 'Nuclieos',
      period: 'September 2024 – Present',
      location: 'Lahore, Pakistan',
      description: [
        'Implement AI models in new and existing applications to enhance user experience for clients',
        'Develop and manage APIs for seamless and scalable integration of Generative AI features',
        'Create Minimum Viable Projects (MVPs) and Proof of Concepts (POCs) to demonstrate AI capabilities',
        'Leverage AI solutions to address client-specific challenges, enhancing operational efficiency',
        'Engineer containerized services using Docker, deploying systems for scalability'
      ],
      technologies: ['Python', 'Docker', 'Generative AI', 'APIs', 'Containerization']
    },
    {
      title: 'Associate Software Engineer',
      company: 'Ashlar Global',
      period: 'January 2024 – August 2024',
      location: 'Lahore, Pakistan',
      description: [
        'Spearheaded the development and maintenance of web applications using Python backend frameworks',
        'Embedded generative models into applications to provide chatbot features',
        'Enhanced user interaction and functionality through AI integration',
        'Collaborated with cross-functional teams on full-stack development projects'
      ],
      technologies: ['Python', 'Web Development', 'Generative AI', 'Chatbots', 'Backend Frameworks']
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Ashlar Global',
      period: 'October 2023 – January 2024',
      location: 'Lahore, Pakistan',
      description: [
        'Worked with latest LLMs such as OpenAI and Llama2',
        'Fine-tuned models with parameters according to specific use cases',
        'Applied Prompt Engineering techniques for optimal model performance',
        'Gained expertise in model optimization and deployment strategies'
      ],
      technologies: ['OpenAI', 'Llama2', 'Fine Tuning', 'Prompt Engineering', 'LLMs']
    },
    {
      title: 'AI/ML Intern',
      company: 'Ashlar Global',
      period: 'July 2023 – October 2023',
      location: 'Lahore, Pakistan',
      description: [
        'Performed Natural Language Processing tasks for data cleaning',
        'Preprocessed data for various AI projects and model training',
        'Gained foundational experience in data preparation workflows',
        'Applied NLP libraries for text processing and analysis'
      ],
      technologies: ['NLP', 'Data Preprocessing', 'SpaCy', 'NLTK', 'Data Cleaning']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            My career path in AI and software development
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period} • {exp.location}</div>
              </div>
              <ul className="timeline-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const projects = [
    {
      title: 'Vocal Host',
      icon: '🎙️',
      type: 'voice',
      description: [
        'Enterprise-grade AI-powered virtual receptionist solution integrated with Twilio',
        'Autonomously manages comprehensive business communications including call routing',
        'Handles appointment scheduling, cancellations, and rescheduling automatically',
        'Utilizes advanced natural language processing and contextual understanding',
        'Custom document integration for personalized client interactions',
        'Significantly reduces operational overhead and human error rates'
      ],
      technologies: ['Python', 'Twilio API', 'NLP', 'AI Integration', 'Document Processing', 'Voice Processing'],
      github: null,
      demo: 'https://ai-voice-assistant-frontend.vercel.app'
    },
    {
      title: 'Flow AI',
      icon: '🤖',
      type: 'chat',
      description: [
        'Developed a chatbot platform that converts natural language into decision trees',
        'Used prompt engineering with GPT 4o and 4o mini models for interactions',
        'Built Business Owner Bot with WhatsApp integration for decision tree creation',
        'Implemented RAG integration allowing PDF uploads for additional knowledge',
        'Created Customer Bot for WhatsApp-based customer interactions',
        'Presented as MVP to visitors at the LEAP AI 25 Conference in Riyadh'
      ],
      technologies: ['NestJS', 'React JS', 'MongoDB', 'GPT-4o', 'WhatsApp API', 'RAG'],
      github: null,
      demo: null
    },
    {
      title: 'AI Note Genius',
      icon: '📝',
      type: 'note',
      description: [
        'Developed a Zoom Marketplace approved application using Flask',
        'Enabled users to connect Zoom accounts and create/schedule meetings',
        'Integrated transcription, diarization, note taking features and sentiment analysis',
        'Used open-source libraries, Generative AI and LLM prompting',
        'Implemented RESTful APIs for enhanced system responsiveness and performance'
      ],
      technologies: ['Flask', 'Vanilla JavaScript', 'MySQL', 'Docker', 'Generative AI', 'REST APIs'],
      github: 'https://github.com/alisidd-00/AI-NOTE-TAKER',
      demo: null
    },
    {
      title: 'AI Recruiter',
      icon: '👥',
      type: 'hr',
      description: [
        'Developed a feature for existing HRM application with Fast API integration',
        'Processed job descriptions alongside static images',
        'Implemented gender detection for AI Avatar functionality',
        'Added text-to-speech for questions and video generation with lip sync',
        'Handled candidate recordings using natural language and Generative AI techniques'
      ],
      technologies: ['FastAPI', 'React JS', 'MySQL', 'Computer Vision', 'Text-to-Speech', 'Video Generation'],
      github: 'https://github.com/FoliagedSquid3/lip2sync-final',
      demo: null
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-description">
            A showcase of my AI and software development projects
          </p>
        </div>
        
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in" data-type={project.type}>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-description">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>}
                {project.demo && <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {!project.github && !project.demo && <span className="project-link-disabled">Private Project</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Ready to bring your AI ideas to life? Let's connect and discuss how we can collaborate
          </p>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="card fade-in" style={{maxWidth: '600px', width: '100%'}}>
            <div className="card-icon">💬</div>
            <h3 className="card-title">Get in Touch</h3>
            <p className="card-description">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in the AI space. Whether you have a specific project in mind 
              or just want to explore possibilities, I'd love to hear from you.
            </p>
            
            <div className="code-block" style={{marginTop: '2rem'}}>
              <div className="code-header">
                <div className="code-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="code-title">contact.json</div>
              </div>
              <div className="code-content">
                <div>&#123;</div>
                <div>&nbsp;&nbsp;<span className="code-keyword">"email"</span>: <span className="code-string">"malisiddiq0@gmail.com"</span>,</div>
                <div>&nbsp;&nbsp;<span className="code-keyword">"linkedin"</span>: <span className="code-string">"<a href="https://www.linkedin.com/in/muhammad-ali-siddique/" style={{color: 'var(--accent-tertiary)', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">muhammad-ali-siddique</a>"</span>,</div>
                <div>&nbsp;&nbsp;<span className="code-keyword">"response_time"</span>: <span className="code-string">"24 hours"</span>,</div>
                <div>&nbsp;&nbsp;<span className="code-keyword">"availability"</span>: <span className="code-string">"Open to opportunities"</span></div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="code-block">
          <div className="code-header">
            <div className="code-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="code-title">farewell.py</div>
          </div>
          <div className="code-content">
            <div><span className="code-keyword">print</span>(<span className="code-string">"Thanks for visiting! 🚀"</span>)</div>
            <div><span className="code-comment"># Built with passion for AI and innovation</span></div>
          </div>
        </div>
        
        <p>&copy; 2024 Muhammad Ali Siddique. Crafted with vibe coding</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/muhammad-ali-siddique/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/alisidd-00" className="social-link" target="_blank" rel="noopener noreferrer">GitHub (Main)</a>
          <a href="https://github.com/siddali00" className="social-link" target="_blank" rel="noopener noreferrer">GitHub (Alt)</a>
          <a href="mailto:malisiddiq0@gmail.com" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

// Animated Background Components
const CodingParticles = () => {
  const codeSnippets = [
    'const ai = new AI()',
    'import tensorflow',
    'def train_model():',
    'SELECT * FROM data',
    'npm install react',
    'git commit -m "feat"',
    'docker run -p 8080',
    'pip install pandas',
    'for i in range(10):',
    'useState(false)',
    'async/await',
    'console.log("Hello")',
    'model.fit(X, y)',
    'df.groupby("col")',
    'fastapi.get("/")',
    'vector.similarity()',
    'rag.retrieve(query)',
    'llm.generate(prompt)'
  ];

  const [particles, setParticles] = useState<Array<{id: number, code: string, left: number, delay: number}>>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 100,
        delay: Math.random() * 15
      }));
      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coding-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="code-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`
          }}
        >
          {particle.code}
        </div>
      ))}
    </div>
  );
};

const MatrixRain = () => {
  const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]();<>?/\\|~`';
  const [columns, setColumns] = useState<Array<{id: number, chars: string, left: number, delay: number}>>([]);

  useEffect(() => {
    const createColumns = () => {
      const newColumns = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        chars: Array.from({ length: 20 }, () => 
          matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ).join(''),
        left: Math.random() * 100,
        delay: Math.random() * 8
      }));
      setColumns(newColumns);
    };

    createColumns();
    const interval = setInterval(createColumns, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-rain">
      {columns.map((column) => (
        <div
          key={column.id}
          className="matrix-column"
          style={{
            left: `${column.left}%`,
            animationDelay: `${column.delay}s`
          }}
        >
          {column.chars}
        </div>
      ))}
    </div>
  );
};

const FloatingIcons = () => {
  const programmingIcons = ['⚡', '🐍', '⚛️', '🔧', '📊', '🤖', '💾', '🔍', '🚀', '💻', '🎯', '🛠️'];
  const [icons, setIcons] = useState<Array<{id: number, icon: string, left: number, delay: number}>>([]);

  useEffect(() => {
    const createIcons = () => {
      const newIcons = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        icon: programmingIcons[Math.floor(Math.random() * programmingIcons.length)],
        left: Math.random() * 100,
        delay: Math.random() * 25
      }));
      setIcons(newIcons);
    };

    createIcons();
    const interval = setInterval(createIcons, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-icons">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="floating-icon"
          style={{
            left: `${icon.left}%`,
            animationDelay: `${icon.delay}s`
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

const FloatingCodeSnippets = () => {
  const snippets = [
    'class AI:\n  def __init__(self):\n    self.model = None',
    'const data = await\n  fetch("/api/data")\n  .then(r => r.json())',
    'SELECT users.*\nFROM users\nWHERE active = true',
    'import pandas as pd\ndf = pd.read_csv("data.csv")\ndf.head()',
    'vector_db.similarity_search(\n  query_embedding,\n  k=5\n)',
    'def train_model(X, y):\n  model.fit(X, y)\n  return model.score(X, y)'
  ];

  const [codeSnippets, setCodeSnippets] = useState<Array<{id: number, code: string, left: number, delay: number}>>([]);

  useEffect(() => {
    const createSnippets = () => {
      const newSnippets = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        code: snippets[Math.floor(Math.random() * snippets.length)],
        left: Math.random() * 80,
        delay: Math.random() * 20
      }));
      setCodeSnippets(newSnippets);
    };

    createSnippets();
    const interval = setInterval(createSnippets, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-code-snippets">
      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="code-snippet"
          style={{
            left: `${snippet.left}%`,
            animationDelay: `${snippet.delay}s`
          }}
        >
          <pre>{snippet.code}</pre>
        </div>
      ))}
    </div>
  );
};

// Main App Component
function App() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Add skill tag animation delays
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
      (tag as HTMLElement).style.setProperty('--delay', index.toString());
    });

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      {/* Animated Background Elements */}
      <CodingParticles />
      <MatrixRain />
      <FloatingIcons />
      <FloatingCodeSnippets />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
