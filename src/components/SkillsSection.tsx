import React, { useState } from 'react';
import {
  Code,
  FileCode,
  Palette,
  Server,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Layout,
  Terminal,
  Layers,
  Wrench
} from 'lucide-react';
import { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryMap: Record<string, { label: string; icon: React.ReactNode }> = {
    all: { label: 'All Tech Stack', icon: <Layers className="w-4 h-4" /> },
    frontend: { label: 'Frontend & UI', icon: <Palette className="w-4 h-4" /> },
    backend: { label: 'Backend & APIs', icon: <Server className="w-4 h-4" /> },
    ai: { label: 'AI & Data', icon: <Cpu className="w-4 h-4" /> },
    devops: { label: 'DevOps & Cloud', icon: <Cloud className="w-4 h-4" /> },
    tools: { label: 'Tools & Design', icon: <Wrench className="w-4 h-4" /> },
  };

  const skillIcons: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-indigo-500" />,
    FileCode: <FileCode className="w-5 h-5 text-blue-500" />,
    Palette: <Palette className="w-5 h-5 text-pink-500" />,
    Server: <Server className="w-5 h-5 text-emerald-500" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-500" />,
    Database: <Database className="w-5 h-5 text-amber-500" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-500" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
    Layout: <Layout className="w-5 h-5 text-violet-500" />,
  };

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900/50 text-xs font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills, Languages & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Core technologies and frameworks I use to engineer robust digital products.
          </p>
        </div>

        {/* Skill Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Object.entries(categoryMap).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeTab === key
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-slate-600'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                    {skillIcons[skill.iconName] || <Code className="w-5 h-5 text-indigo-500" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400 capitalize">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
