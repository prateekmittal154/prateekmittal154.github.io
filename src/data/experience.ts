export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  type: 'industry' | 'research' | 'leadership';
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
  details?: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Ind & Func AI Decision Science Analyst',
    organization: 'Accenture Strategy & Consulting',
    location: 'Gurugram, India',
    period: 'Jun 2026 – Present',
    type: 'industry',
    description: [
      'Working within Accenture Strategy & Consulting’s AI & Data ecosystem on decision science, GenAI/agentic-AI, analytics, and AI-led enterprise transformation.',
      'Contributing to backend development, testing, problem framing, solution design, and stakeholder-ready outputs for production-oriented AI workflows.',
    ],
    skills: ['GenAI', 'Agentic AI', 'Decision Science', 'Enterprise Transformation', 'Python'],
  },
  {
    role: 'Data Scientist – Assistant Manager',
    organization: 'Dr. Lal PathLabs',
    location: 'Gurugram, India',
    period: 'Jun 2024 – Jun 2026',
    type: 'industry',
    description: [
      'Built OCR/document-intelligence automation for Form 16A extraction using Azure Document Intelligence, processing 500+ forms/month and saving 20+ hrs/month.',
      'Developed doctor-facing RAG WhatsApp assistant with lead capture and centralized sales-app tracking, improving query response coverage.',
      'Led multilingual GenAI support for web and patient app channels, handling 3,000+ patient interactions/day and generating ~400 leads/day.',
      'Designed API-based compliance document verification for selected tests at registration, reducing document-related rework/holds by ~97%.',
      'Automated MIS and KPI reporting using Power BI, Report Builder, SQL workflows, and Power Automate.',
      'Built demand forecasting pipelines for partner-level consumable planning and operational inventory.',
      'Designed a unified health-score framework for Indian patients using reference intervals, Mahalanobis distance, and age/sex-adaptive weighting.',
      'Developed pathology/radiology report-interpretability QA engine using RAG, GenAI pipelines, and knowledge-graph mechanisms.',
    ],
    skills: ['Azure Doc Intelligence', 'RAG', 'Knowledge Graphs', 'Power BI', 'SQL', 'Forecasting'],
  },
  {
    role: 'Lab Coordinator & Research Assistant',
    organization: 'Vision Exploration and Data Analytics (VEDAs) Lab',
    location: 'Prayagraj, India',
    period: 'Jan 2024 – Present',
    type: 'research',
    description: [
      'Coordinated multi-institution medical AI research projects across microscopy, ultrasound, retinal imaging, and neuroimaging, contributing to MICCAI/JBHI/MedIA/ICLR targets.',
      'Built reusable retrieval, evaluation, and experiment-tracking pipelines using FAISS, structured SOPs, and reproducible ML workflows for a 5+ member team.',
      'Implemented advanced medical imaging workflows including 3D lesion morphometry, Laplace–Beltrami spectral analysis, and classifier-guided attention fusion.',
      'Developed robust high-dimensional subsampling algorithms with proven theoretical and empirical robustness under contaminated data.',
    ],
    skills: ['PyTorch', 'FAISS', 'Laplace-Beltrami Analysis', 'Medical Imaging', 'Differential Geometry'],
  },
  {
    role: 'Research Associate (Remote)',
    organization: 'Yale University',
    location: 'New Haven, CT, USA',
    period: '2023',
    type: 'research',
    description: [
      'Contributed to BrainLM, a foundation model trained on 6,700 hours of fMRI recordings to decode human cognition and behavior from whole-brain activity (ICLR 2024).',
      'Collaborated with a 7-member team on LLM-assisted brain-state prediction, clinically correlated representation learning, and counterfactual perturbation analysis.',
    ],
    skills: ['BrainLM', 'fMRI Neuroimaging', 'Foundation Models', 'Representation Learning'],
  },
  {
    role: 'Founder; Chairman & Managing Director',
    organization: 'Foundation for Ethical AI in Healthcare',
    location: 'Faridabad, India',
    period: 'Apr 2026 – Present',
    type: 'leadership',
    description: [
      'Founded a Section 8 healthcare AI initiative focused on ethical, evidence-based, and clinically responsible AI adoption.',
      'Leading workstreams across AI-in-healthcare research, policy dialogue, medical AI standards, and academic-community engagement.',
      'Building a virtual think-tank model connecting researchers, clinicians, technologists, and public-health stakeholders.',
    ],
    skills: ['Healthcare AI Governance', 'Bioethics', 'Policy Design', 'Non-profit Leadership'],
  },
  {
    role: 'Research Intern',
    organization: 'Indian Institute of Technology (IIT) Ropar',
    location: 'Ropar, India',
    period: '2022',
    type: 'research',
    description: [
      'Trained a multimodal food classification network on a 101-class dataset, improving image accuracy by 11.57% and text accuracy by 6.34% over baseline.',
      'Accelerated model improvements through data stratification, domain adaptation experiments, and comparative evaluation.',
    ],
    skills: ['Multimodal Deep Learning', 'PyTorch', 'Domain Adaptation'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'M.Sc. in Data Science and Artificial Intelligence',
    institution: 'Birla Institute of Technology and Science (BITS), Pilani',
    timeline: '2026 – Present',
    score: 'CGPA: 9.50',
    details: 'Specialization in Machine Learning, Statistical Inference, and Advanced AI.',
  },
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'Thapar Institute of Engineering and Technology (TIET)',
    timeline: '2020 – 2024',
    score: 'CGPA: 8.83',
    details: 'Focus on Data Structures, Algorithms, Machine Learning, and Computer Vision.',
  },
];
