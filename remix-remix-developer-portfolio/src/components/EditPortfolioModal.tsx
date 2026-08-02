import React, { useState } from 'react';
import { X, Save, Plus, Trash2, RotateCcw, Edit2, Sparkles, FolderPlus } from 'lucide-react';
import { ProfileData, Project } from '../types';

interface EditPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  projects: Project[];
  onSaveProfile: (profile: ProfileData) => void;
  onSaveProjects: (projects: Project[]) => void;
  onResetData: () => void;
}

export const EditPortfolioModal: React.FC<EditPortfolioModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  onSaveProfile,
  onSaveProjects,
  onResetData,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects'>('profile');
  const [editedProfile, setEditedProfile] = useState<ProfileData>({ ...profile });
  const [editedProjects, setEditedProjects] = useState<Project[]>([...projects]);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // New project state form
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS'],
    featured: false,
    liveUrl: '',
    githubUrl: '',
    metrics: '',
    date: new Date().toISOString().slice(0, 7)
  });

  const [newTagInput, setNewTagInput] = useState('');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(editedProfile);
    onClose();
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.shortDescription) return;
    const created: Project = {
      id: `proj-${Date.now()}`,
      title: newProject.title,
      shortDescription: newProject.shortDescription,
      fullDescription: newProject.fullDescription || newProject.shortDescription,
      category: newProject.category as any || 'web',
      imageUrl: newProject.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: newProject.tags && newProject.tags.length > 0 ? newProject.tags : ['React', 'TypeScript'],
      featured: !!newProject.featured,
      liveUrl: newProject.liveUrl,
      githubUrl: newProject.githubUrl,
      metrics: newProject.metrics,
      date: newProject.date || '2026-08'
    };

    const updated = [created, ...editedProjects];
    setEditedProjects(updated);
    onSaveProjects(updated);
    setNewProject({
      title: '',
      shortDescription: '',
      fullDescription: '',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Tailwind CSS'],
      featured: false,
      liveUrl: '',
      githubUrl: '',
      metrics: '',
      date: new Date().toISOString().slice(0, 7)
    });
  };

  const handleDeleteProject = (id: string) => {
    const updated = editedProjects.filter((p) => p.id !== id);
    setEditedProjects(updated);
    onSaveProjects(updated);
  };

  const handleAddTagToNewProject = () => {
    if (!newTagInput.trim()) return;
    setNewProject((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), newTagInput.trim()]
    }));
    setNewTagInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Customize Portfolio Content
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Easily replace name, bio, contacts, or add custom showcase projects.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (confirm('Reset portfolio back to default demo data?')) {
                  onResetData();
                  onClose();
                }
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100 flex items-center gap-1"
              title="Reset Demo Data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 pt-3 shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Manage Projects ({editedProjects.length})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-left space-y-6">
          {activeTab === 'profile' ? (
            /* Profile Form */
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    required
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Title</label>
                  <input
                    type="text"
                    required
                    value={editedProfile.title}
                    onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Bio / About</label>
                <textarea
                  rows={3}
                  value={editedProfile.bio}
                  onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Location</label>
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Avatar Image URL</label>
                <input
                  type="text"
                  value={editedProfile.avatarUrl}
                  onChange={(e) => setEditedProfile({ ...editedProfile, avatarUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </button>
              </div>
            </form>
          ) : (
            /* Projects Form & List */
            <div className="space-y-8">
              {/* Add New Project Card Box */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-4">
                <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                  <FolderPlus className="w-4 h-4 text-indigo-600" />
                  <span>Add New Project</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Project Title (e.g. Acme Dashboard)"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  />
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  >
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI / Data</option>
                    <option value="tools">Tool / Package</option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  placeholder="Short summary description..."
                  value={newProject.shortDescription}
                  onChange={(e) => setNewProject({ ...newProject, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Live Demo URL"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="GitHub Repo URL"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  />
                </div>

                {/* Tags Adding */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add tag (e.g. React, Python)"
                      value={newTagInput}
                      onChange={(e) => setNewTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTagToNewProject();
                        }
                      }}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleAddTagToNewProject}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
                    >
                      Add Tag
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {newProject.tags?.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddProject}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project To Portfolio</span>
                </button>
              </div>

              {/* Current Projects List */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Current Portfolio Projects ({editedProjects.length})
                </h3>

                <div className="space-y-2">
                  {editedProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.imageUrl}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-xl object-cover shrink-0 bg-slate-200"
                        />
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white">{p.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{p.shortDescription}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteProject(p.id)}
                        className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
