
import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl glass border border-white/5"
    >
      {/* Content (no image) */}
      <div className="relative p-6">
        <div className="flex gap-2 mb-4">
          {project.tools.map(tool => (
            <span key={tool} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300">
              {tool}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Problem</p>
            <p className="text-sm text-slate-300">{project.problem}</p>
          </div>
          
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Key Insight</p>
            <p className="text-sm text-blue-100 font-medium italic">{project.insight}</p>
          </div>
        </div>

        <div className="flex items-center mt-6 pt-6 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Github size={18} />
            View Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
