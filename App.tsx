import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  LayoutDashboard, 
  BrainCircuit, 
  Database, 
  TrendingUp,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

import InteractiveBackground from './components/Background';
import GlassCard from './components/GlassCard';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { SKILLS, PROJECTS, LAB_EXPERIMENTS, NAVIGATION_LINKS } from './constants';

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState('home');

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Account for fixed nav height
        behavior: 'smooth'
      });
      setActiveNav(targetId);
    }
  };

  // Scroll Spy: Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_LINKS.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <InteractiveBackground />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 border border-white/10 shadow-2xl">
          {NAVIGATION_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs md:text-sm font-bold transition-all duration-300 relative py-1 px-2 ${
                activeNav === link.name.toLowerCase() ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {link.name}
              {activeNav === link.name.toLowerCase() && (
                <motion.div 
                  layoutId="nav-glow"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10" 
                />
              )}
              {activeNav === link.name.toLowerCase() && (
                <motion.div 
                  layoutId="nav-line"
                  className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" 
                />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-48">
        
        {/* Hero Section */}
        <section id="home" className="grid lg:grid-cols-12 gap-12 items-center scroll-mt-32">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase"
            >
              Available for Data Analyst Roles
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-8xl font-extrabold leading-tight tracking-tight"
            >
              Exploring <span className="text-gradient">Data.</span><br />
              Discovering Patterns.<br />
              Delivering <span className="text-gradient italic">Insights.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              Turning raw noise into strategic clarity. Certified Data Analyst with 
              real-time internship experience in predictive modeling and business intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={(e) => handleNavClick(e as any, '#projects')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2 group"
              >
                View Projects
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://portfolio-cz6o.onrender.com/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-violet-600 to-purple-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-glow" />
              <div className="relative w-80 h-96 lg:w-96 lg:h-[32rem] rounded-[2rem] overflow-hidden border-2 border-white/10 glass">
                <img 
                  src="https://portfolio-cz6o.onrender.com/assets/Profile_Pic.png" 
                  alt="Professional Profile"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-bold text-2xl">Bakka Vijay Raju</p>
                  <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Data Analyst/Strategist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-12 scroll-mt-32">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">The Narrative</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BrainCircuit className="text-blue-400" />
                Philosophy
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                I believe data is more than just columns in a database. It's the digital fingerprint of human behavior, market trends, and hidden opportunities. My journey began with a simple curiosity: "Why does this happen?" and evolved into a technical pursuit of answering it with statistical certainty.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="text-purple-400" />
                Background
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <TrendingUp className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Certified Data Analyst</h4>
                    <p className="text-sm text-slate-500 italic">Advanced Analytics Institute</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <LayoutDashboard className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Real-time Analytics Internship</h4>
                    <p className="text-sm text-slate-500 italic">FinTech Solutions Group</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="space-y-16 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
            <div className="space-y-2">
              <h2 className="text-5xl font-extrabold text-white">Technical Arsenal</h2>
              <p className="text-slate-500 text-lg">The tools I use to dismantle complex problems.</p>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-2 rounded-lg glass border border-white/10 text-xs font-bold text-slate-400">Total Projects: 24+</span>
              <span className="px-4 py-2 rounded-lg glass border border-white/10 text-xs font-bold text-slate-400">Avg Insight Accuracy: 96%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="space-y-16 scroll-mt-32">
          <div className="space-y-4">
            <h2 className="text-5xl font-extrabold text-white">Featured Analysis</h2>
            <p className="text-slate-500 text-lg max-w-2xl">A selection of deep-dive projects where I translated raw data into actionable business strategies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Lab / Experiments */}
        <section id="lab" className="relative scroll-mt-32">
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-[4rem] blur-3xl -z-10" />
          
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <div className="p-3 w-fit rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <BrainCircuit className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-white">Learning Lab</h2>
              <p className="text-slate-400 leading-relaxed">
                This is my sandbox. Where I experiment with new libraries, test theories, and document my continuous learning journey.
              </p>
              <button className="flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all">
                Explore the Notebooks <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {LAB_EXPERIMENTS.map((exp, i) => (
                <GlassCard key={exp.title} className="hover:border-blue-500/30">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{exp.date}</span>
                    <div className="flex gap-1">
                      {exp.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-[10px] text-blue-300 font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{exp.description}</p>
                  <button className="text-xs font-bold text-blue-400/80 hover:text-blue-400 flex items-center gap-1 group">
                    Read Post <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="pb-32 scroll-mt-32">
          <GlassCard className="p-10 md:p-16 text-center space-y-12 bg-gradient-to-br from-blue-600/5 via-violet-600/5 to-purple-600/5 border-white/10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight">
                Let's Build Something<br />
                <span className="text-gradient">Powerful with Data.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                Currently looking for new opportunities to solve complex puzzles and 
                drive value through analytical rigor.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:bvijayrajug@gmail.com?subject=Opportunity%20via%20Portfolio&body=Hi%20Vijay%2C%0A%0AI%27m%20reaching%20out%20after%20viewing%20your%20portfolio.%20Would%20love%20to%20discuss%20opportunities.%0A%0ABest%2C%0A%5BYour%20Name%5D"
                title="Send an email to Bakka Vijay Raju"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl bg-white text-slate-950 font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3"
              >
                <Mail size={24} />
                Send a Message
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/vijay-raju-bakka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                  title="Vijay Raju Bakka on LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/vijayraju-vm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                  title="vijayraju-vm on GitHub"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-medium">
              <p>© 2026 Bakka Vijay Raju. Built with curiosity & React.</p>
              <p>Designed & Developed by Me.</p>
            </div>
          </GlassCard>
        </section>

      </main>

      {/* Background Decorative Blur */}
      <div className="fixed top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[10%] left-[-10%] w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
};

export default App;
