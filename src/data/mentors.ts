export interface Mentor {
  name: string;
  role: string;
  affiliation: string;
  relationship: string;
  linkedin?: string;
  website?: string;
  category: 'academic' | 'industry';
  period: string;
}

export const mentors: Mentor[] = [
  // --- ACADEMIC MENTORS ---
  {
    name: 'Dr. Joohi Chauhan',
    role: 'Assistant Professor, Dept. of Computer Science & Engineering',
    affiliation: 'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
    relationship: 'Mentored me since 2022 during my B.E. at Thapar Institute and continues to guide my research across medical AI, differential geometry, and robust estimation (MICCAI 2026, TMLR 2026).',
    linkedin: 'https://www.linkedin.com/in/dr-joohi-chauhan-4b827364/',
    website: 'http://www.mnnit.ac.in',
    category: 'academic',
    period: '2022 – Present',
  },
  {
    name: 'Dr. David van Dijk',
    role: 'Assistant Professor of Medicine & Computer Science',
    affiliation: 'Yale University',
    relationship: 'Mentored my 2024 remote research collaboration on BrainLM (ICLR 2024), shaping my foundational understanding of whole-brain fMRI foundation models and high-dimensional biological representation learning.',
    linkedin: 'https://www.linkedin.com/in/david-van-dijk-06834516/',
    website: 'https://www.vandijklab.org/',
    category: 'academic',
    period: '2024 (Formative Collaboration)',
  },
  {
    name: 'Dr. Prabal Pratap Singh',
    role: 'Researcher & Academic Collaborator',
    affiliation: 'IIT Kanpur & MNNIT Allahabad Collaborations',
    relationship: 'Close research mentor and collaborator starting in 2025 across multiple medical AI, diagnostic mask-perturbation auditing, and agentic Graph-RAG initiatives.',
    linkedin: 'https://www.linkedin.com/in/prabal-pratap-singh-480922119/',
    category: 'academic',
    period: '2025 – Present',
  },

  // --- INDUSTRY MENTORS (Dr. Lal PathLabs) ---
  {
    name: 'Mr. Munender Soperna',
    role: 'Group Chief Information & Digital Officer (CIDO)',
    affiliation: 'Dr. Lal PathLabs',
    relationship: 'Provided close executive IT and digital transformation guidance, sponsoring large-scale clinical AI initiatives and enterprise workflow re-engineering.',
    linkedin: 'https://www.linkedin.com/in/munender-soperna-2a409311/',
    category: 'industry',
    period: '2024 – 2026',
  },
  {
    name: 'Gaurav Sharma',
    role: 'IT & Cloud Engineering Leader',
    affiliation: 'Dr. Lal PathLabs',
    relationship: 'Offered close technical guidance in cloud architecture, data pipelines, Azure Document Intelligence integration, and scalable deployment.',
    linkedin: 'https://www.linkedin.com/in/gaurav-sharma-6a092147/',
    category: 'industry',
    period: '2024 – 2026',
  },
  {
    name: 'Dr. Reena Nakra',
    role: 'Principal Director – Lab Management & Technical Excellence / CSO',
    affiliation: 'Dr. Lal PathLabs',
    relationship: 'Mentored physician-facing and clinical-grade algorithms, ensuring diagnostic reliability, laboratory quality standards, and clinical safety.',
    linkedin: 'https://www.linkedin.com/in/reena-nakra-a9442031/',
    category: 'industry',
    period: '2024 – 2026',
  },
  {
    name: 'Dr. Nimmi Kansal',
    role: 'National Head – Clinical Chemistry & Biochemical Genetics',
    affiliation: 'Dr. Lal PathLabs',
    relationship: 'Mentored the clinical grounding of patient health-score frameworks, diagnostic biomarker ranges, and Indian population reference interval validation.',
    linkedin: 'https://www.linkedin.com/in/dr-nimmi-kansal-a83a451b/',
    category: 'industry',
    period: '2024 – 2026',
  },
];
