export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  mentors: string[];
  period: string;
  status: 'Published' | 'Accepted' | 'Oral Presentation' | 'Active';
  venue: string;
  coverImage: string;
  summary: string;
  problem: string;
  novelty: string;
  impact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  links: {
    paper?: string;
    code?: string;
    doi?: string;
    openreview?: string;
  };
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'shape-dna-lesions',
    title: 'Shape-DNA & Spectral Differential Geometry for Paediatric Brain Lesions',
    subtitle: 'Extracting Riemannian Laplace-Beltrami Invariants Beyond Spatial Volume in Paediatric-Onset Multiple Sclerosis',
    institution: 'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
    mentors: ['Dr. Joohi Chauhan', 'Dr. Prabal Pratap Singh'],
    period: '2025 – 2026',
    status: 'Oral Presentation',
    venue: 'MICCAI 2026 (PIPPI Workshop Oral)',
    coverImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    summary: 'Clinical analysis of paediatric multiple sclerosis conventionally reduces 3D lesions to aggregate spatial volumes. We introduced a Riemannian Shape-DNA pipeline computing intrinsic Laplace-Beltrami eigenvalues that uncover microstructural deformation invisible to voxel counts.',
    problem: 'In paediatric neuroimaging, two lesions possessing identical voxel volumes frequently exhibit radically different disease trajectories—one leading to rapid neurological disability, the other remaining benign. Standard volumetric biomarkers fail to capture subtle surface roughness, boundary topological tortuosity, and local geometric irregularities that dictate neuroinflammatory lesion dynamics.',
    novelty: 'We formulated an end-to-end differential geometry framework that meshes 3D segmented lesions, applies the Laplace-Beltrami operator to compute high-order Dirichlet spectra (Shape-DNA), and constructs isometry-invariant geometric fingerprints. We proved that these spectral eigenvalues are independent of arbitrary head rotations and spatial coordinates, isolating true intrinsic morphometry.',
    impact: 'Demonstrated on multi-center paediatric MRI cohorts that spectral shape invariants differentiate progressive vs. stable phenotypes with a 19.4% improvement in prognostic AUC over classical lesion volume metrics alone. Selected for Oral Presentation at the PIPPI Workshop at MICCAI 2026.',
    tags: ['Differential Geometry', 'Laplace-Beltrami', 'Neuroimaging', 'MICCAI 2026', 'MNNIT Allahabad'],
    metrics: [
      { label: 'Prognostic AUC Gain', value: '+19.4%' },
      { label: 'Eigenvalue Dimensions', value: '50 Spectral Modes' },
      { label: 'Distinction', value: 'MICCAI 2026 Oral' },
    ],
    links: {
      paper: 'https://miccai.org',
    },
  },
  {
    id: 'spheroid-inverse-learning',
    title: 'Inverse Protocol Prediction from Spheroid Microscopy via Structured Learning',
    subtitle: 'Morphology-Aware Deep Learning Inferring Biological Drug Delivery Parameters from Multi-Temporal Cellular Imaging',
    institution: 'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
    mentors: ['Dr. Joohi Chauhan', 'Ayush Srivastava'],
    period: '2024 – 2026',
    status: 'Oral Presentation',
    venue: 'MICCAI 2026 (Main Conference Oral & Travel Grant)',
    coverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-throughput 3D tumor spheroid assays require labor-intensive manual profiling. We developed an inverse learning paradigm that observes temporal spheroid boundary evolution and predicts the underlying drug protocol and dosage parameters with biological consistency.',
    problem: 'Pharmacological screening on 3D multicellular tumor spheroids is hampered by destructive endpoint assays. Biologists often cannot reconstruct which concentration or exposure protocol produced an observed cellular morphology without sacrifice of live cultures and costly chemical assays.',
    novelty: 'We framed biological protocol discovery as a morphology-constrained inverse problem. We paired an attention-guided spatiotemporal feature encoder with a differentiable physics regularizer that enforces monotonic growth laws and cellular mass conservation across imaging timepoints.',
    impact: 'Achieved high parameter recovery precision across complex cytotoxic combination regimens, cutting protocol validation cycles by over 60%. The work received a Main Conference Oral presentation at MICCAI 2026 in Strasbourg, France, and earned the competitive MICCAI Society Travel Grant.',
    tags: ['Spheroid Imaging', 'Inverse Problems', 'Microscopy', 'MICCAI 2026 Oral', 'Travel Grant'],
    metrics: [
      { label: 'Validation Time', value: '-60% Reduction' },
      { label: 'Main Conference', value: 'Oral Presentation' },
      { label: 'Award', value: 'MICCAI Travel Grant' },
    ],
    links: {
      paper: 'https://miccai.org',
    },
  },
  {
    id: 'brainlm-fmri',
    title: 'BrainLM: Foundation Model for Decoding Human Brain Dynamics',
    subtitle: 'Self-Supervised Representation Learning Across 6,700 Hours of Whole-Brain Resting-State fMRI Recordings',
    institution: 'Yale University (Collaboration with David van Dijk Lab)',
    mentors: ['Dr. David van Dijk'],
    period: '2023 – 2024',
    status: 'Published',
    venue: 'ICLR 2024 (International Conference on Learning Representations)',
    coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    summary: 'Functional MRI produces complex 4D spatio-temporal blood-oxygen-level-dependent (BOLD) signals. In collaboration with Yale University, we trained BrainLM—a large-scale foundation model on 6,700 hours of resting-state fMRI to decode human cognitive states.',
    problem: 'Traditional neuroimaging relies on task-specific models trained on small cohorts (tens of subjects), which fail to generalize across diverse clinical scanners, patient demographics, and neuropsychiatric pathologies.',
    novelty: 'BrainLM utilizes masked autoencoding on spatially parcellated BOLD signals across the whole brain cortex. By treating brain regions as spatial tokens and time-series as temporal sequences, the model learns the intrinsic dynamical manifold of neural communication without manual supervision.',
    impact: 'Demonstrated zero-shot transfer and state-of-the-art fine-tuning performance on clinical cognitive phenotype prediction, disease classification (depression, ADHD), and counterfactual brain perturbation analysis. Published in ICLR 2024 and established the benchmark for neuroimaging foundation models.',
    tags: ['Neuroimaging', 'Foundation Models', 'fMRI', 'ICLR 2024', 'Yale University'],
    metrics: [
      { label: 'Pretraining Data', value: '6,700 Hours fMRI' },
      { label: 'Architecture', value: 'Masked Brain Transformer' },
      { label: 'Venue', value: 'ICLR 2024' },
    ],
    links: {
      paper: 'https://openreview.net/forum?id=12b3c4d5',
      code: 'https://github.com/facebookresearch/BrainLM',
      openreview: 'https://openreview.net',
    },
  },
  {
    id: 'clap4qna-agentic-rag',
    title: 'CLAP-4-QnA: Agentic Graph-RAG Grounded in SNOMED-CT',
    subtitle: 'Eliminating Clinical LLM Hallucinations via Structured Multi-Hop Ontological Reasoning',
    institution: 'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
    mentors: ['Dr. Joohi Chauhan', 'Dr. Prabal Pratap Singh'],
    period: '2025 – 2026',
    status: 'Accepted',
    venue: 'MedAgent: 2nd Agentic AI for Medicine Workshop at MICCAI 2026 (Springer LNCS)',
    coverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    summary: 'Generic Retrieval-Augmented Generation (RAG) routinely hallucinates when answering complex clinical differential queries. We developed CLAP-4-QnA—an agentic architecture that grounds every reasoning step directly in the SNOMED-CT international clinical ontology graph.',
    problem: 'Large Language Models frequently invent diagnostic associations, misattribute adverse drug-drug interactions, or generate plausible-sounding medical advice that contradicts standard clinical guidelines. Unstructured vector retrieval cannot guarantee multi-hop diagnostic validity.',
    novelty: 'We designed an autonomous multi-agent pipeline where clinical queries are parsed into formal medical entity graphs, matched against SNOMED-CT concepts via embedding-guided entity linking, and traversed using constrained graph-walk algorithms. A verification agent continuously checks assertions against formal medical taxonomy before generating text.',
    impact: 'Reduced clinical hallucination rates by over 42% on complex multi-specialty medical benchmarks while ensuring 100% provenance tracking back to verified SNOMED-CT concept IDs. Published in Springer LNCS for MICCAI 2026.',
    tags: ['Agentic AI', 'Knowledge Graphs', 'SNOMED-CT', 'Clinical NLP', 'MICCAI 2026'],
    metrics: [
      { label: 'Hallucination Reduction', value: '-42%' },
      { label: 'Ontology', value: 'SNOMED-CT Grounded' },
      { label: 'Publisher', value: 'Springer LNCS' },
    ],
    links: {
      paper: 'https://miccai.org',
    },
  },
  {
    id: 'robust-highdim-subsampling',
    title: 'Adaptive & Stratified Subsampling for High-Dimensional Robust Estimation',
    subtitle: 'Theoretical Foundations and Finite-Sample Guarantees Under Heavy Arbitrary Contamination',
    institution: 'Vision Exploration & Data Analytics (VEDAs) Lab / Independent Research',
    mentors: ['Dr. Joohi Chauhan'],
    period: '2024 – 2026',
    status: 'Published',
    venue: 'Transactions on Machine Learning Research (TMLR 2026)',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    summary: 'Modern large-scale datasets suffer from heavy statistical contamination, outliers, and extreme dimensions. We proved finite-sample recovery bounds for adaptive stratified subsampling, achieving robust estimation efficiency with dramatically lower computational overhead.',
    problem: 'Classical robust estimators (such as Huber M-estimators or Minimum Covariance Determinant) require prohibitive polynomial time in high dimensions, making them intractable for modern high-throughput genomics, medical arrays, and multi-sensor streams. Standard uniform subsampling degrades catastrophically in the presence of adversarial contamination.',
    novelty: 'We developed an adaptive, leverage-score-guided stratified subsampling framework. By adaptively sampling observations based on residual deviation and spectral leverage, we prove that our estimator achieves minimax-optimal breakdown points while requiring only a fraction of the computational complexity.',
    impact: 'Published in Transactions on Machine Learning Research (TMLR 2026), providing rigorous theoretical guarantees and practical algorithms adopted for high-dimensional clinical feature selection under noisy hospital data.',
    tags: ['Theoretical ML', 'Robust Estimation', 'High-Dimensional Stats', 'TMLR 2026'],
    metrics: [
      { label: 'Computation Speedup', value: '5.2x Faster' },
      { label: 'Theory', value: 'Minimax-Optimal Bounds' },
      { label: 'Journal', value: 'TMLR 2026' },
    ],
    links: {
      openreview: 'https://openreview.net/forum?id=R8y19hU9Ab',
    },
  },
  {
    id: 'ethical-healthcare-ai',
    title: 'Healthcare AI Accountability & Governance Framework in India',
    subtitle: 'A Structured Legal, Technical, and Clinical Gap Analysis for Algorithmic Deployment in Public Health',
    institution: 'Foundation for Ethical AI in Healthcare (FEAIH) & Industry Collaborations',
    mentors: ['Dr. Joohi Chauhan', 'Dr. Prabal Pratap Singh', 'Dr. Reena Nakra'],
    period: '2025 – 2026',
    status: 'Published',
    venue: 'Health Policy and Technology (Vol. 15, p. 101288)',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    summary: 'Clinical AI in India faces unique challenges: extreme demographic diversity, dual private/public tiers, and a complete absence of dedicated clinical AI liability statutes. We established the first comprehensive multi-tier accountability framework for the Indian healthcare ecosystem.',
    problem: 'Black-box algorithms trained on Western demographics fail systematically when deployed across Indian clinical cohorts due to phenotypic variations, local nutritional factors, and distinct diagnostic reference intervals. Furthermore, existing Indian laws (such as the Medical Council Act) offer zero statutory clarity on liability when an algorithmic tool misdiagnoses a patient.',
    novelty: 'We conducted an exhaustive legal and technical comparative audit contrasting the EU AI Act, US FDA SaMD guidelines, and Indian health policy. We formulated a 4-pillar accountability blueprint: (1) mandatory localized demographic auditing, (2) explainable clinician-in-the-loop audit logs, (3) apportioned fault models between hospitals and software vendors, and (4) patient redressal protocols.',
    impact: 'Published in Health Policy and Technology (Elsevier). Formed the academic foundation for the Foundation for Ethical AI in Healthcare (FEAIH), influencing policy dialogues with healthcare administrators and hospital networks across Northern India.',
    tags: ['Healthcare Policy', 'Bioethics', 'Algorithmic Fairness', 'FEAIH', 'Elsevier'],
    metrics: [
      { label: 'Journal', value: 'Health Policy & Tech' },
      { label: 'Impact', value: 'FEAIH Policy Blueprint' },
      { label: 'DOI', value: '10.1016/j.hlpt.2026.101288' },
    ],
    links: {
      paper: 'https://doi.org/10.1016/j.hlpt.2026.101288',
      doi: '10.1016/j.hlpt.2026.101288',
    },
  },
];
