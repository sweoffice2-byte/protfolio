import React from 'react';
import { ExternalLink, Github, Star, Sparkles, ArrowUpRight, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onToggleStar: (projectId: string) => void;
  isStarred: boolean;
  viewMode: 'grid' | 'list';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  onToggleStar,
  isStarred,
  viewMode,
}) => {
  const categoryLabels: Record<string, string> = {
    web: 'Web App',
    mobile: 'Mobile App',
    ai: 'AI & Data',
    tools: 'Dev Tool / Package'
  };

  const categoryColors: Record<string, string> = {
    web: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900',
    mobile: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900',
    ai: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900',
    tools: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900'
  };

  if (viewMode === 'list') {
    return (
      <div
        className={`group rounded-2xl bg-white dark:bg-slate-800/90 border transition-all duration-200 hover:shadow-lg p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-start md:items-center ${
          project.featured
            ? 'border-indigo-200 dark:border-indigo-900/60 shadow-xs'
            : 'border-slate-200 dark:border-slate-800'
        }`}
      >
        {/* List View Image */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative w-full md:w-64 h-44 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer group-hover:opacity-95 transition-opacity"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* List View Body */}
        <div className="flex-1 space-y-2 text-left">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  categoryColors[project.category] || categoryColors.web
                }`}
              >
                {categoryLabels[project.category] || project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">{project.date}</span>
            </div>

            <button
              onClick={() => onToggleStar(project.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isStarred
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50'
                  : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-700/50'
              }`}
              title={isStarred ? 'Unstar project' : 'Star project'}
            >
              <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
            </button>
          </div>

          <h3
            onClick={() => onSelectProject(project)}
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 pt-1">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </p>
          )}
        </div>

        {/* List View Actions */}
        <div className="flex md:flex-col gap-2 shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 md:flex-none px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Source Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Default)
  return (
    <div
      className={`group rounded-2xl bg-white dark:bg-slate-800/90 border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        project.featured
          ? 'border-indigo-200 dark:border-indigo-900/60 shadow-sm'
          : 'border-slate-200/90 dark:border-slate-800'
      }`}
    >
      <div>
        {/* Card Header Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Category & Featured Badge */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 items-center">
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md shadow-xs ${
                categoryColors[project.category] || categoryColors.web
              }`}
            >
              {categoryLabels[project.category] || project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
          </div>

          {/* Star Bookmark */}
          <button
            onClick={() => onToggleStar(project.id)}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all ${
              isStarred
                ? 'bg-amber-500 text-white border-amber-400 shadow-sm'
                : 'bg-slate-900/60 text-slate-300 border-white/20 hover:text-white hover:bg-slate-900/80'
            }`}
            title={isStarred ? 'Saved project' : 'Save to favorites'}
          >
            <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 text-left space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{project.date}</span>
            {project.metrics && (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                {project.metrics.split('•')[0]}
              </span>
            )}
          </div>

          <h3
            onClick={() => onSelectProject(project)}
            className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-auto">
        <button
          onClick={() => onSelectProject(project)}
          className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 group/btn"
        >
          <span>View Breakdown</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="GitHub Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
