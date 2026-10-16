export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const profile = {
  name: 'Prateek Mittal',
  tagline: 'AI Decision Science Analyst · Medical AI Researcher · Writer',
  roles: [
    'Ind & Func AI Decision Science Analyst @ Accenture',
    'Medical AI Researcher @ VEDAs Lab & Yale BrainLM Contributor',
    'Founder @ Foundation for Ethical AI in Healthcare',
    'M.Sc. Data Science & AI @ BITS Pilani (9.50 CGPA)',
  ],
  bio: `AI Decision Science Analyst at Accenture and medical AI researcher working across clinical foundation models, diagnostic imaging, and statistical learning. Research portfolio includes peer-reviewed work in TMLR, ICLR (BrainLM), MICCAI, and Health Policy & Technology. In quieter hours, I write poetry, study philosophy, and reflect on technology and human dignity.`,
  location: 'Gurugram & Faridabad, India',
  email: 'prateekmittal154@gmail.com',
  phone: '+91-9205119313',
  avatar: '/images/prateek.png',
  social: [
    { name: 'GitHub', url: 'https://github.com/prateekmittal154', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/prateek-mittal', icon: 'linkedin' },
    { name: 'ORCID', url: 'https://orcid.org', icon: 'orcid' },
    { name: 'Google Scholar', url: 'https://scholar.google.com', icon: 'graduation-cap' },
    { name: 'Email', url: 'mailto:prateekmittal154@gmail.com', icon: 'mail' },
  ],
  awards: [
    {
      title: 'MICCAI Society Travel Grant',
      year: '2026',
      venue: 'Strasbourg, France',
      description: 'Selected recipient supporting participation and presentations at the 29th MICCAI conference.',
    },
    {
      title: 'MICCAI 2026: 3 Oral Presentations',
      year: '2026',
      venue: 'Main Conference & Workshops',
      description: 'Main conference oral on inverse protocol prediction from spheroid microscopy, alongside FAIMI & PIPPI workshop orals.',
    },
    {
      title: 'APDW 2026 Oral Presentation',
      year: '2026',
      venue: 'Manila, Philippines',
      description: 'First author oral presentation on digital-health gaps in celiac disease.',
    },
  ],
  service: [
    'Reviewer: ICLR 2026, NeurIPS 2026, ACM Transactions on Intelligent Systems and Technology (TIST)',
    'Reviewer: IEEE SIST 2026, International Conference on Innovations in Computing (ICISCT 2026)',
    'Reviewer: Next Generation of Networked Data, AI and Intelligent Systems (NGNDAI 2025 & 2026)',
  ],
};
