import React, { useState, useEffect } from 'react';
import { ProfileData, Project, Skill, Experience } from './types';
import { initialProfile, initialProjects, initialSkills, initialExperiences } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { EditPortfolioModal } from './components/EditPortfolioModal';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Profile & Projects state with localStorage backup
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProfile;
      }
    }
    return initialProfile;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProjects;
      }
    }
    return initialProjects;
  });

  // Starred projects set
  const [starredIds, setStarredIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('portfolio_starred');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch {
        return new Set(['proj-1', 'proj-2']);
      }
    }
    return new Set(['proj-1', 'proj-2']);
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  // Sync dark mode class with <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Save profile to local storage
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('portfolio_profile', JSON.stringify(updated));
  };

  // Save projects to local storage
  const handleSaveProjects = (updated: Project[]) => {
    setProjects(updated);
    localStorage.setItem('portfolio_projects', JSON.stringify(updated));
  };

  // Star toggle
  const handleToggleStar = (projectId: string) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      localStorage.setItem('portfolio_starred', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // Reset to default demo data
  const handleResetData = () => {
    localStorage.removeItem('portfolio_profile');
    localStorage.removeItem('portfolio_projects');
    localStorage.removeItem('portfolio_starred');
    setProfile(initialProfile);
    setProjects(initialProjects);
    setStarredIds(new Set(['proj-1', 'proj-2']));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        profile={profile}
        onOpenEditModal={() => setEditModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Featured Projects Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onToggleStar={handleToggleStar}
          starredIds={starredIds}
        />

        {/* Skills Section */}
        <SkillsSection skills={initialSkills} />

        {/* Career Experience Section */}
        <ExperienceTimeline experiences={initialExperiences} />

        {/* Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        profile={profile}
        experiences={initialExperiences}
        skills={initialSkills}
      />

      <EditPortfolioModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        profile={profile}
        projects={projects}
        onSaveProfile={handleSaveProfile}
        onSaveProjects={handleSaveProjects}
        onResetData={handleResetData}
      />
    </div>
  );
}
