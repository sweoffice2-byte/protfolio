import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2, GraduationCap, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { ProfileData, Experience, Skill } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: Experience[];
  skills: Skill[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  skills,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>{profile.name} - Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">{profile.name}</h1>
                <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  {profile.title}
                </p>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {profile.location}</p>
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {profile.email}</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {profile.phone}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {profile.bio}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-950 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">{exp.role} — <span className="text-slate-500">{exp.company}</span></span>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-950 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education & Credentials
            </h2>
            <div className="text-xs space-y-1">
              <div className="flex items-center justify-between font-semibold text-sm">
                <span>B.S. in Computer Science & Software Engineering</span>
                <span className="font-mono text-slate-400">2017 - 2021</span>
              </div>
              <p className="text-slate-500">University Honors • GPA 3.85 / 4.0</p>
            </div>
          </div>

          {/* Skills Core List */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-950 pb-1">
              Technical Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {s.name} ({s.level}%)
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
