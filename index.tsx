
/**
 * Dr. Ernesto Lee - Portfolio Engine (Vanilla JS)
 * This file replaces index.tsx as the main entry point to fix framework-related errors.
 */

// --- DATA ---
const IMPACT_STATS = [
    { label: "Threat Detection", value: "40%", desc: "Accuracy improvement using NLP in risk systems.", icon: "shield-alert" },
    { label: "Processing Speed", value: "60%", desc: "Reduction in processing time via automation.", icon: "zap" },
    { label: "Customer Support", value: "35%", desc: "Improvement via LLM deployment.", icon: "message-square" },
    { label: "Scale", value: "100K+", desc: "Students reached via global AI education.", icon: "users" }
];

const SKILLS = [
    { cat: "AI & Deep Learning", list: ["Generative AI", "LLMs", "NLP", "TensorFlow", "Computer Vision"] },
    { cat: "Cloud & Data", list: ["Azure Scientist", "AWS Architect", "Databricks", "Synapse"] },
    { cat: "Emerging Tech", list: ["Blockchain", "Hyperledger", "Microservices", "Big Data"] }
];

const PUBLICATIONS = [
    { title: "Non-invasive driver drowsiness detection system", authors: "HUR Siddiqui, et al.", journal: "Sensors 21 (14)", year: 2021 },
    { title: "Sentiment Analysis on Tweets during COVID-19", authors: "M Mujahid, et al.", journal: "Applied Sciences 11 (18)", year: 2021 },
    { title: "Blockchain implementation in Sustainable Supply Chain", authors: "O Boutkhoum, et al.", journal: "Mathematics 9 (14)", year: 2021 },
    { title: "Learning Analytics for Academic Performance", authors: "A Rafique, et al.", journal: "IEEE Access", year: 2021 },
    { title: "Predicting Pulsars with Hybrid Resampling", authors: "E Lee, et al.", journal: "Advances in Astronomy", year: 2021 },
    { title: "Deepfake tweets classification using stacked Bi-LSTM", authors: "V Rupapara, et al.", journal: "PeerJ Comp Sci 7", year: 2021 }
];

const EXPERIENCE = [
    { role: "Lead Data Scientist", company: "Trivera Technologies", period: "2020 – Present", tasks: ["Led LLM/GenAI application", "Architected ML pipelines", "Azure/Synapse Integration"] },
    { role: "Assistant Professor", company: "Miami Dade College", period: "2022 – Present", tasks: ["AI Task Force Member", "NSF Grant Co-PI", "Data Analytics Curriculum"] },
    { role: "Chief Data Officer", company: "TechBlue, Inc.", period: "2018 – 2020", tasks: ["Gov Solutions (IRS/DHS)", "Cloud Architect", "Blockchain PoC"] }
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderImpact();
    renderSkills();
    renderPublications();
    renderExperience();
    
    // Fix: Cast window to any to access global 'lucide' library injected via script tags
    if ((window as any).lucide) {
        (window as any).lucide.createIcons();
    }
});

function initNav() {
    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    }

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.add('hidden'));
        });
    }
}

function renderImpact() {
    const grid = document.getElementById('impact-grid');
    if (!grid) return;
    grid.innerHTML = IMPACT_STATS.map(stat => `
        <div class="glass p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="${stat.icon}" class="w-7 h-7"></i>
            </div>
            <div class="text-5xl font-extrabold text-white mb-2">${stat.value}</div>
            <div class="text-xl font-bold text-blue-400 mb-4">${stat.label}</div>
            <p class="text-gray-400 text-sm leading-relaxed">${stat.desc}</p>
        </div>
    `).join('');
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = SKILLS.map(group => `
        <div class="glass p-8 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 class="text-2xl font-bold mb-8 flex items-center space-x-3">
                <span class="w-2 h-8 bg-blue-500 rounded-full"></span>
                <span>${group.cat}</span>
            </h3>
            <ul class="space-y-4">
                ${group.list.map(skill => `
                    <li class="flex items-center space-x-3 text-gray-300">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i>
                        <span class="font-medium">${skill}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderPublications(filter = '') {
    const list = document.getElementById('pub-list');
    const searchInput = document.getElementById('pub-search') as HTMLInputElement;
    if (!list) return;

    const filtered = PUBLICATIONS.filter(p => 
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.journal.toLowerCase().includes(filter.toLowerCase())
    );

    list.innerHTML = filtered.map(pub => `
        <div class="glass p-6 rounded-2xl hover:bg-white/5 transition-all group">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
                <div class="flex-1">
                    <h4 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">${pub.title}</h4>
                    <p class="text-sm text-gray-400 mb-1">${pub.authors}</p>
                    <div class="flex items-center space-x-3">
                        <span class="text-sm font-semibold text-blue-500">${pub.journal}</span>
                        <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span class="text-sm text-gray-500">${pub.year}</span>
                    </div>
                </div>
                <button class="flex-shrink-0 flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all">
                    <span class="text-sm font-medium">Read Paper</span>
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `).join('');

    if (filtered.length === 0) {
        list.innerHTML = `<div class="text-center py-20 text-gray-500">No matching publications found.</div>`;
    }

    if (searchInput && !searchInput.dataset.bound) {
        searchInput.addEventListener('input', (e: any) => {
            renderPublications(e.target.value);
            // Fix: Cast window to any to access global 'lucide' library injected via script tags
            if ((window as any).lucide) (window as any).lucide.createIcons();
        });
        searchInput.dataset.bound = "true";
    }
}

function renderExperience() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    container.innerHTML = EXPERIENCE.map((exp, i) => `
        <div class="relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
            <div class="w-full md:w-1/2 pl-12 md:px-12 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}">
                <div class="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                        <h4 class="text-xl font-bold text-white">${exp.role}</h4>
                        <span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20 whitespace-nowrap">${exp.period}</span>
                    </div>
                    <p class="text-lg font-semibold text-emerald-400 mb-4">${exp.company}</p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        ${exp.tasks.map(t => `<li class="flex items-start space-x-2 ${i % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse'}">
                            <span class="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span>${t}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}
