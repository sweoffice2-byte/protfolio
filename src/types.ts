export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'ai' | 'tools';
  imageUrl: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  keyFeatures?: string[];
  date: string;
  starred?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'tools';
  level: number; // 1-100
  iconName: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subtitles: string[];
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  availableForHire: boolean;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}
