import React, { useState, useEffect } from 'react';
import {
  Code2,
  Briefcase,
  GitCommit,
  Users,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  MapPin,
  CheckCircle2,
  Download
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResumeModal }) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    if (!profile.subtitles || profile.subtitles.length === 0) return;
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentSubtitleIndex((prev) => (prev + 1) % profile.subtitles.length);
        setFadeState(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, [profile.subtitles]);

  const statIconsMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    GitCommit: <GitCommit className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    Users: <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Status Badge */}
            {profile.availableForHire && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-2xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for modern web & AI projects</span>
              </div>
            )}

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                {profile.title}
              </h2>
            </div>

            {/* Rotating Dynamic Subtitle */}
            <div className="h-8 flex items-center">
              <p
                className={`text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-2 transition-opacity duration-300 ${
                  fadeState ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{profile.subtitles[currentSubtitleIndex] || profile.subtitles[0]}</span>
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{profile.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Latest Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700/60 shadow-xs transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                id="hero-cta-resume"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
                title="Download / View Resume"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {profile.twitterUrl && (
                  <a
                    href={profile.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Hero Avatar & Visual Card Right Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-75 blur-xl transition duration-500"></div>

              {/* Main Avatar Card Frame */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl overflow-hidden">
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <p className="font-bold text-lg">{profile.name}</p>
                    <p className="text-xs text-slate-300 font-medium">{profile.title}</p>
                  </div>
                </div>

                {/* Floating Interactive Badge */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Verified Developer Portfolio</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">v2.5.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-500/30 transition-all duration-200 text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50">
                  {statIconsMap[stat.icon] || <Code2 className="w-5 h-5 text-indigo-500" />}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
