import { ProfileData, Project, Skill, Experience } from '../types';

export const initialProfile: ProfileData = {
  name: 'Alex Vance',
  title: 'Senior Full Stack & AI Engineer',
  subtitles: [
    'Building scalable web applications',
    'Architecting AI-powered solutions',
    'Crafting high-performance UI systems',
    'Open source advocate & builder'
  ],
  bio: 'Full-stack software engineer with 5+ years of experience crafting modern web applications, interactive AI interfaces, and resilient backend systems. Passionate about clean architecture, developer experience, and design aesthetics.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  location: 'San Francisco, CA (Remote)',
  email: 'alex.vance.dev@example.com',
  phone: '+1 (555) 234-5678',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://x.com',
  availableForHire: true,
  stats: [
    { label: 'Projects Completed', value: '24+', icon: 'Code2' },
    { label: 'Years Experience', value: '5+', icon: 'Briefcase' },
    { label: 'Code Commits', value: '4.8k+', icon: 'GitCommit' },
    { label: 'Happy Clients', value: '18+', icon: 'Users' }
  ]
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Nova AI Studio & Workflow Engine',
    shortDescription: 'A real-time node-based AI orchestration canvas for building LLM workflows with instant preview.',
    fullDescription: 'Nova AI Studio is a next-generation visual workflow platform that enables developers to combine LLM prompts, API integrations, vector memory search, and web tools into real-time executable pipelines.',
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Node.js', 'WebSocket'],
    featured: true,
    liveUrl: 'https://example.com/nova-studio',
    githubUrl: 'https://github.com/example/nova-ai-studio',
    metrics: '12k+ active workflows created • 99.9% pipeline reliability',
    keyFeatures: [
      'Interactive canvas node editor with drag-and-drop wiring',
      'Streaming token responses with Markdown formatting',
      'Built-in API endpoint exporter for production deployment',
      'Dark/light responsive canvas themes with zero-latency updates'
    ],
    date: '2026-05'
  },
  {
    id: 'proj-2',
    title: 'Pulse Analytics Dashboard',
    shortDescription: 'High-frequency telemetry and server metrics monitoring platform with custom widget layouts.',
    fullDescription: 'Pulse provides real-time infrastructure visibility for Cloud Run containers, microservices, and micro-frontend applications with interactive SVG graphs, alert rules, and log stream parsing.',
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'TypeScript', 'Express', 'D3.js'],
    featured: true,
    liveUrl: 'https://example.com/pulse-analytics',
    githubUrl: 'https://github.com/example/pulse-analytics',
    metrics: '50M+ logs processed daily • 45ms avg latency',
    keyFeatures: [
      'Customizable drag-and-drop analytics dashboard grid',
      'Real-time WebSockets metric streaming at 60 FPS',
      'Automated error detection with anomaly threshold triggers',
      'Exportable CSV and PDF compliance reports'
    ],
    date: '2026-03'
  },
  {
    id: 'proj-3',
    title: 'Zenith Collaborative Workspace',
    shortDescription: 'Real-time document editor & task management platform with rich text and Kanban synchronization.',
    fullDescription: 'Zenith unites team docs, task boards, and daily standup notes into one unified workspace. Built with CRDT state synchronization for seamless offline support and live multiplayer collaboration.',
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
    featured: true,
    liveUrl: 'https://example.com/zenith-app',
    githubUrl: 'https://github.com/example/zenith-workspace',
    metrics: '4.9/5 user rating across 150+ teams',
    keyFeatures: [
      'Rich text editor with slash commands and markdown shortcuts',
      'Multiplayer cursor indicators with typing avatars',
      'Kanban board with drag-and-drop state filters',
      'Instant search with local offline IndexedDB cache'
    ],
    date: '2026-01'
  },
  {
    id: 'proj-4',
    title: 'Orbit Mobile Fitness Companion',
    shortDescription: 'AI-assisted mobile wellness & activity tracker app built for iOS and Android.',
    fullDescription: 'Orbit leverages device telemetry and AI pattern recognition to deliver personalized workout plans, recovery metrics, and real-time audio coaching during outdoor runs.',
    category: 'mobile',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    tags: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'AI Motion Analytics'],
    featured: false,
    liveUrl: 'https://example.com/orbit-fitness',
    githubUrl: 'https://github.com/example/orbit-mobile',
    metrics: '35,000+ App Store downloads',
    keyFeatures: [
      'GPS run tracking with dynamic route gradient maps',
      'Personalized AI daily recovery advisor',
      'Apple HealthKit & Google Fit cross-syncing',
      'Social activity feed with photo overlay generation'
    ],
    date: '2025-11'
  },
  {
    id: 'proj-5',
    title: 'Aura UI Design System CLI',
    shortDescription: 'An open-source developer CLI tool for generating accessible, themed React component libraries.',
    fullDescription: 'Aura CLI analyzes design tokens, generates TypeScript props, standardizes Tailwind CSS variables, and outputs WCAG-compliant accessible UI components in seconds.',
    category: 'tools',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Node.js', 'TypeScript', 'CLI', 'Tailwind CSS', 'npm Package'],
    featured: false,
    liveUrl: 'https://npmjs.com/package/aura-ui-cli',
    githubUrl: 'https://github.com/example/aura-ui-cli',
    metrics: '18k+ monthly npm downloads • 1.2k GitHub Stars',
    keyFeatures: [
      'Zero-config CLI command generator (`npx aura-ui add button`)',
      'Automatic dark mode contrast check validation',
      'Custom theme generator with color theory palettes',
      'Exports clean React + Tailwind TSX files'
    ],
    date: '2025-09'
  },
  {
    id: 'proj-6',
    title: 'HyperDrive Code Search Engine',
    shortDescription: 'Blazing-fast semantic code search engine parsing multi-repo codebases with AST indexing.',
    fullDescription: 'HyperDrive indexes git repositories into hybrid vector and keyword embeddings, allowing engineers to query complex architectures using natural language queries.',
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    tags: ['Python', 'FastAPI', 'React', 'Gemini Embeddings', 'Vector Search'],
    featured: false,
    liveUrl: 'https://example.com/hyperdrive-search',
    githubUrl: 'https://github.com/example/hyperdrive-search',
    metrics: 'Sub-100ms response over 1M+ lines of code',
    keyFeatures: [
      'AST-aware code parser for TypeScript, Python, and Go',
      'Natural language semantic search for function logic',
      'Inline diff generator with AI refactoring suggestions',
      'VS Code extension companion'
    ],
    date: '2025-07'
  }
];

export const initialSkills: Skill[] = [
  { name: 'React / Next.js', category: 'frontend', level: 95, iconName: 'Code', description: 'React 19, Server Components, Custom Hooks, Context API' },
  { name: 'TypeScript', category: 'frontend', level: 92, iconName: 'FileCode', description: 'Generics, Strict Type Safety, Utility Types, AST' },
  { name: 'Tailwind CSS', category: 'frontend', level: 96, iconName: 'Palette', description: 'Utility-first design, Custom themes, Responsive grid' },
  { name: 'Node.js / Express', category: 'backend', level: 88, iconName: 'Server', description: 'REST APIs, WebSockets, Middleware, Async architecture' },
  { name: 'Gemini AI API', category: 'ai', level: 90, iconName: 'Cpu', description: 'LLM integration, Prompt engineering, Streaming, Embeddings' },
  { name: 'PostgreSQL / SQL', category: 'backend', level: 85, iconName: 'Database', description: 'Database design, Indexing, Query optimization' },
  { name: 'Docker / Cloud Run', category: 'devops', level: 82, iconName: 'Cloud', description: 'Containerization, CI/CD pipelines, Cloud Run deployment' },
  { name: 'Git & GitHub', category: 'tools', level: 94, iconName: 'GitBranch', description: 'Branching workflows, GitHub Actions, Code reviews' },
  { name: 'Figma & UI Design', category: 'tools', level: 86, iconName: 'Layout', description: 'Wireframing, Design systems, Micro-interactions' },
];

export const initialExperiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Full Stack Engineer',
    company: 'Apex Cloud Systems',
    period: '2024 - Present',
    description: 'Leading frontend architecture and backend API integrations for cloud monitoring tools.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini AI API'],
    highlights: [
      'Reduced initial page bundle load time by 42% using modular code splitting.',
      'Architected real-time AI assistant feature serving over 25,000 active sessions.',
      'Mentored a team of 6 engineers on TypeScript best practices and accessibility.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Frontend Software Engineer',
    company: 'Veloce Digital Product Lab',
    period: '2022 - 2024',
    description: 'Built customer-facing web applications, design systems, and responsive dashboards.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'REST APIs', 'Jest'],
    highlights: [
      'Designed and published a unified component library adopted across 8 internal projects.',
      'Built a high-performance web dashboard displaying live WebSockets financial charts.',
      'Achieved 100% Lighthouse accessibility and performance ratings on core landing pages.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Software Developer Intern',
    company: 'PixelCraft Labs',
    period: '2021 - 2022',
    description: 'Developed responsive UI components, refactored legacy code, and implemented bug fixes.',
    technologies: ['JavaScript', 'React', 'CSS3 / Tailwind', 'Git'],
    highlights: [
      'Converted legacy jQuery codebases to clean React functional components.',
      'Built interactive user onboarding flows with state persistence.'
    ]
  }
];
