
import React from 'react';
import { Skill } from '../types';
import GlassCard from './GlassCard';
import { Database, Code2, BarChart3, Terminal, Cpu, Layout, FileSpreadsheet, Search, Github } from 'lucide-react';

const iconMap: Record<string, any> = {
  python: Code2,
  database: Database,
  layout: Layout,
  'bar-chart': BarChart3,
  search: Search,
  cpu: Cpu,
  github: Github,
  'file-spreadsheet': FileSpreadsheet,
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = iconMap[skill.icon] || Terminal;

  return (
    <GlassCard className="h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors">
          <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1 text-white">{skill.name}</h3>
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{skill.category}</p>
        </div>
        <p className="text-sm text-slate-300 line-clamp-2">{skill.description}</p>
        
        {/* Progress Bar Simulation */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600 shadow-[0_0_14px_rgba(250,204,21,0.18)]"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillCard;
