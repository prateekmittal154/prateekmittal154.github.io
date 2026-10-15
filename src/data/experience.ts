export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  type: 'industry' | 'research' | 'leadership' | 'grassroots';
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
  details?: string;
}

export interface Chapter {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  essence: string;
  narrative: string;
  items: ExperienceItem[];
  highlightLink?: { text: string; url: string };
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
    skills: ['Decision Science', 'Agentic AI', 'Enterprise Transformation', 'Problem Framing'],
  },
  {
    role: 'Data Scientist – Assistant Manager',
    organization: 'Dr. Lal PathLabs',
    location: 'Gurugram, India',
    period: 'Jun 2024 – Jun 2026',
    type: 'industry',
    description: [
      'Led clinical GenAI & patient-facing support channels handling 3,000+ daily patient interactions.',
      'Developed doctor-facing RAG WhatsApp assistant with lead capture and centralized sales-app tracking.',
      'Engineered automated document intelligence for Form 16A extraction saving 20+ hours monthly.',
      'Designed a unified health-score framework for Indian patients using reference intervals, Mahalanobis distance, and age/sex-adaptive weighting.',
      'Built report-interpretability QA engines grounded in clinical knowledge graphs.',
    ],
    skills: ['Clinical RAG', 'Knowledge Graphs', 'Document AI', 'Forecasting', 'Health Scoring'],
  },
  {
    role: 'Lab Coordinator & Research Assistant',
    organization: 'Vision Exploration and Data Analytics (VEDAs) Lab',
    location: 'Prayagraj, India',
    period: 'Jan 2024 – Present',
    type: 'research',
    description: [
      'Coordinating multi-institution medical AI research across microscopy, ultrasound, and neuroimaging (MICCAI, TMLR, ICLR targets).',
      'Developed differential geometry algorithms (Shape-DNA spectral analysis, Laplace-Beltrami operators) for pediatric brain lesion morphometry.',
      'Formulated adaptive and stratified subsampling algorithms with proven theoretical robustness under contaminated data (TMLR 2026).',
    ],
    skills: ['Differential Geometry', 'Robust Estimation', 'Medical Imaging', 'PyTorch'],
  },
  {
    role: 'Research Associate (Remote)',
    organization: 'Yale University',
    location: 'New Haven, CT, USA',
    period: '2023',
    type: 'research',
    description: [
      'Contributed to BrainLM, a foundation model trained on 6,700 hours of fMRI recordings to decode human cognition and behavior from brain activity (ICLR 2024).',
      'Collaborated on LLM-assisted brain-state prediction, representation learning, and counterfactual perturbation analysis.',
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
      'Founded a Section 8 non-profit initiative focused on ethical, clinically responsible AI adoption in Indian healthcare.',
      'Leading workstreams on medical AI governance, regulatory gap analysis (Health Policy & Technology 2026), and stakeholder dialogues.',
      'Connecting clinicians, researchers, and public-health advocates to prevent algorithmic harm in underserved populations.',
    ],
    skills: ['Bioethics', 'Healthcare Governance', 'Regulatory Analysis', 'Public Health'],
  },
  {
    role: 'Academic Head (formerly Volunteer Educator)',
    organization: 'Pratigya Abhiyan',
    location: 'Patiala, India',
    period: '2020 – 2024',
    type: 'grassroots',
    link: '/writing/pratigya-abhiyan',
    description: [
      'Joined as volunteer educator teaching children from underprivileged backgrounds; rose to lead the academic vertical as Academic Head.',
      'Restructured core curriculum into tiered, adaptive learning modules across literacy and foundational numeracy.',
      'Trained cohorts of university student volunteers on pedagogical sensitivity, child psychology, and consistent mentoring.',
      'Organized community showcases, science exhibitions, and parent engagement circles to foster dignity and confidence.',
    ],
    skills: ['Pedagogy', 'Grassroots Education', 'Mentorship', 'Curriculum Design', 'Community Leadership'],
  },
  {
    role: 'Research Intern',
    organization: 'Indian Institute of Technology (IIT) Ropar',
    location: 'Ropar, India',
    period: '2022',
    type: 'research',
    description: [
      'Trained multimodal food classification networks improving image accuracy by 11.57% and text accuracy by 6.34% over baseline.',
      'Conducted domain adaptation experiments and rigorous stratification.',
    ],
    skills: ['Multimodal Deep Learning', 'PyTorch', 'Domain Adaptation'],
  },
];

export const chapters: Chapter[] = [
  {
    number: '01',
    title: 'The Grassroots Awakening & Foundations',
    subtitle: 'From Classroom Volunteer to Academic Head at Pratigya Abhiyan · Thapar Institute',
    period: '2020 – 2024',
    essence: 'Before computing gradient descents, I learned that true intellect begins with empathy. Teaching children on concrete floors taught me how to communicate, listen, and honor human dignity.',
    narrative: 'While pursuing a Bachelor’s in Computer Engineering at Thapar Institute (8.83 CGPA), my evenings were spent on the floors of Pratigya Abhiyan. Starting as a volunteer educator for children of daily-wage laborers, I witnessed how structural barriers stifle brilliant minds. Over four years, I was entrusted as Academic Head, overhauling curricula, training volunteer cohorts, and building learning systems that unlocked confidence.',
    highlightLink: {
      text: 'Read the full memoir: "Pratigya Abhiyan: Lessons from the Grassroots"',
      url: '/writing/pratigya-abhiyan',
    },
    items: [
      experiences.find((e) => e.organization === 'Pratigya Abhiyan')!,
      {
        role: 'B.E. in Computer Engineering (CGPA 8.83)',
        organization: 'Thapar Institute of Engineering & Technology',
        location: 'Patiala, India',
        period: '2020 – 2024',
        type: 'leadership',
        description: [
          'Foundational studies in algorithms, computer vision, data structures, and statistical learning.',
          'Undergraduate machine learning internship at Experiential Learning Centre analyzing precision agriculture soil data.',
        ],
        skills: ['Algorithms', 'Mathematics', 'Computer Vision', 'Machine Learning'],
      },
    ],
  },
  {
    number: '02',
    title: 'The Research Frontiers & Deep Theory',
    subtitle: 'Yale BrainLM, VEDAs Lab & BITS Pilani M.Sc. Data Science',
    period: '2023 – Present',
    essence: 'Rigorous mathematics as a lens to decode biology. Exploring whole-brain fMRI recordings, Laplace–Beltrami spectral analysis of 3D lesions, and robust high-dimensional theory.',
    narrative: 'Collaborated on BrainLM at Yale University (ICLR 2024), decoding cognition from 6,700 hours of whole-brain fMRI activity. At the VEDAs Lab, coordinated multi-institution medical imaging research that culminated in 5 accepted contributions at MICCAI 2026 (including 3 Oral presentations and the Society Travel Grant) and a foundational paper in Transactions on Machine Learning Research (TMLR). Concurrently completed M.Sc. in Data Science & AI at BITS Pilani with a 9.50 CGPA.',
    highlightLink: {
      text: 'Explore Scholar’s Archive (15+ Papers, Preprints & BibTeX)',
      url: '/research',
    },
    items: [
      experiences.find((e) => e.organization.includes('VEDAs'))!,
      experiences.find((e) => e.organization.includes('Yale'))!,
      {
        role: 'M.Sc. in Data Science & Artificial Intelligence (CGPA 9.50)',
        organization: 'BITS Pilani',
        location: 'Pilani, India',
        period: '2026 – Present',
        type: 'research',
        description: [
          'Advanced coursework and research in high-dimensional probability, statistical inference, deep generative modeling, and optimization.',
        ],
        skills: ['Statistical Inference', 'Theoretical ML', 'Optimization'],
      },
    ],
  },
  {
    number: '03',
    title: 'Systems at Human Scale',
    subtitle: 'Dr. Lal PathLabs & Accenture Strategy & Consulting',
    period: '2024 – Present',
    essence: 'Translating advanced intelligence into real-world operational workflows where reliability, precision, and patient well-being are paramount.',
    narrative: 'At Dr. Lal PathLabs as Data Scientist – Assistant Manager, designed clinical RAG assistants and GenAI web/app workflows serving over 3,000 patients daily, automated document intelligence, and developed custom health-score algorithms for Indian populations. Currently at Accenture Strategy & Consulting, steering decision science, agentic AI, and enterprise analytics to transform complex operations.',
    items: [
      experiences.find((e) => e.organization.includes('Accenture'))!,
      experiences.find((e) => e.organization.includes('Lal PathLabs'))!,
    ],
  },
  {
    number: '04',
    title: 'Moral Conscience & The Public Square',
    subtitle: 'Foundation for Ethical AI in Healthcare & Scholarly Reviewing',
    period: '2026 – Present',
    essence: 'Technology without moral grounding is unquantified liability. Championing clinical accountability, fairness auditing, and ethical stewardship.',
    narrative: 'Founded a Section 8 non-profit initiative connecting clinicians, regulatory scholars, and engineers to address the regulatory and ethical chasm in healthcare AI across India (Health Policy & Technology 2026). Actively serving the global academic community as a peer reviewer for ICLR, NeurIPS, and ACM TIST.',
    highlightLink: {
      text: 'Read essay: "Healthcare AI Accountability in India"',
      url: '/writing/healthcare-ai-accountability',
    },
    items: [
      experiences.find((e) => e.organization.includes('Ethical AI'))!,
    ],
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
    details: 'Graduated with Distinction; Academic Head at Pratigya Abhiyan.',
  },
];
