
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, BookOpen, ChevronRight, 
  Github, Linkedin, Mail, Search, Award,
  Cpu, Database, ShieldAlert, Zap, MessageSquare, Users,
  CheckCircle2, Globe, BrainCircuit, FlaskConical
} from 'lucide-react';
import { IMPACT_STATS, PUBLICATIONS, EXPERIENCE, SKILL_GROUPS } from './constants';

// --- Sub-components ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Publications', href: '#publications' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">
            E
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Dr. Ernesto Lee</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/30">
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 bg-blue-600 rounded-xl font-bold">Get In Touch</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden px-6">
    <div className="hero-glow top-20 -left-40"></div>
    <div className="hero-glow bottom-0 -right-20 opacity-50"></div>
    
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-8 animate-fade-in">
        <Award size={16} />
        <span>DBA, MS, BS • Lead Data Scientist • Professor</span>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight max-w-5xl">
        Dr. Ernesto Lee: <span className="gradient-text">Bridging Advanced Research</span> & Scalable AI Solutions
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
        Pioneer-Practitioner specializing in Generative AI, Cloud Architecture, and NLP. 
        Building intelligent systems that solve high-impact, real-world complexity at scale.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
          <Download size={20} />
          <span>Download CV</span>
        </button>
        <button className="flex items-center justify-center space-x-2 px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all">
          <BookOpen size={20} />
          <span>View Research</span>
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center space-x-2"><Cpu /> <span className="font-semibold">NVIDIA</span></div>
        <div className="flex items-center space-x-2"><Database /> <span className="font-semibold">Azure</span></div>
        <div className="flex items-center space-x-2"><Globe /> <span className="font-semibold">AWS</span></div>
        <div className="flex items-center space-x-2"><BrainCircuit /> <span className="font-semibold">OpenAI</span></div>
      </div>
    </div>
  </section>
);

const ImpactDashboard = () => (
  <section id="impact" className="py-24 px-6 bg-slate-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Technical Impact</h2>
          <p className="text-gray-400 text-lg">
            Translating complex doctorate-level research into tangible business outcomes. 
            Metrics-driven solutions that optimize performance and drive innovation.
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPACT_STATS.map((stat, i) => {
          const IconComp = { ShieldAlert, Zap, MessageSquare, Users }[stat.icon] || Zap;
          return (
            <div key={i} className="glass p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <IconComp size={28} />
              </div>
              <div className="text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-bold text-blue-400 mb-4">{stat.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="expertise" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Ecosystem</h2>
        <p className="text-gray-400">Deep specialization across the modern AI and Data stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              <span>{group.category}</span>
            </h3>
            <ul className="space-y-4">
              {group.skills.map((skill, j) => (
                <li key={j} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                  <span className="font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 glass p-8 rounded-3xl flex flex-wrap items-center justify-around gap-8 text-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Cloud Master</p>
          <p className="text-lg font-bold">Microsoft Certified Azure Data Scientist</p>
        </div>
        <div className="w-px h-12 bg-white/10 hidden md:block"></div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Cloud Architect</p>
          <p className="text-lg font-bold">AWS Certified Solutions Architect</p>
        </div>
        <div className="w-px h-12 bg-white/10 hidden md:block"></div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Ops Specialist</p>
          <p className="text-lg font-bold">AWS Certified DevOps Professional</p>
        </div>
      </div>
    </div>
  </section>
);

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = PUBLICATIONS.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="publications" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Authority</h2>
            <p className="text-gray-400">Published research in Sensors, IEEE, and more.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search publications..." 
              className="w-full pl-12 pr-6 py-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((pub, i) => (
            <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{pub.title}</h4>
                  <p className="text-sm text-gray-400 mb-1">{pub.authors}</p>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-blue-500">{pub.journal}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-sm text-gray-500">{pub.year}</span>
                  </div>
                </div>
                <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all">
                  <span className="text-sm font-medium">Read Paper</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">No publications found matching your search.</div>
          )}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Timeline</h2>
        <p className="text-gray-400">A journey through elite technical leadership and academia</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-600 to-slate-800 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Point on Line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              
              <div className={`w-full md:w-1/2 pl-12 md:px-12 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-emerald-400 mb-4">{exp.company}</p>
                  <ul className={`space-y-2 text-sm text-gray-400 list-disc list-inside ${i % 2 === 0 ? 'text-left' : 'md:text-right md:list-none'}`}>
                    {exp.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">E</div>
          <span className="font-bold">Dr. Ernesto Lee</span>
        </div>
        <p className="text-sm text-gray-500">© 2024. Architecting Intelligence for a better world.</p>
      </div>
      
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
      </div>
      
      <div className="flex space-x-8 text-sm font-medium text-gray-400">
        <a href="#impact" className="hover:text-blue-400">Impact</a>
        <a href="#expertise" className="hover:text-blue-400">Expertise</a>
        <a href="#publications" className="hover:text-blue-400">Research</a>
        <a href="#experience" className="hover:text-blue-400">History</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Nav />
      <Hero />
      <ImpactDashboard />
      <Expertise />
      <Publications />
      <Experience />
      <Footer />
    </div>
  );
}
