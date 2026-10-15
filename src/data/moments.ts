export interface Moment {
  id: string;
  title: string;
  caption: string;
  date: string;
  location?: string;
  category: 'research' | 'life' | 'philosophy' | 'travel' | 'grassroots';
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const moments: Moment[] = [
  {
    id: 'pratigya-classrooms',
    title: 'Pratigya Abhiyan — The Classroom Floor',
    caption: 'Where curiosity outshone every limitation. Teaching foundational math and science on concrete floors, surrounded by eager young minds.',
    date: '2020 – 2024',
    location: 'Thapar Institute, Patiala',
    category: 'grassroots',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'pratigya-academic-head',
    title: 'Mentorship & Academic Headship',
    caption: 'Training college volunteer cohorts, redesigning intuitive curricula, and celebrating small learning breakthroughs.',
    date: '2022 – 2024',
    location: 'Pratigya Abhiyan',
    category: 'grassroots',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait',
  },
  {
    id: 'miccai-strasbourg',
    title: 'MICCAI 2026 & Strasbourg Journeys',
    caption: 'Presenting research on inverse protocol prediction and brain morphometry amidst the historic canals and cathedral of Strasbourg.',
    date: 'Autumn 2026',
    location: 'Strasbourg, France',
    category: 'research',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'poetry-and-parchment',
    title: 'भीतर का ठिकाना — Stanzas at Dawn',
    caption: 'Finding stillness between lines of code. Reflecting on consciousness, memory, and spiritual poetry in the quiet hours.',
    date: '2026',
    location: 'Study & Notebooks',
    category: 'philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait',
  },
  {
    id: 'lab-whiteboard',
    title: 'Differential Geometry & Brain Lesions',
    caption: 'Late night derivations of Laplace-Beltrami spectra and marching-cubes surface reconstructions at the VEDAs Lab.',
    date: '2025',
    location: 'VEDAs Research Lab',
    category: 'research',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square',
  },
  {
    id: 'reading-stack',
    title: 'The Codex of Books',
    caption: 'Current companions: Sankhya philosophy, statistical learning theory, biomedical ethics, and Ghalib.',
    date: 'Ongoing',
    location: 'Personal Library',
    category: 'life',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square',
  },
  {
    id: 'himalayan-reflections',
    title: 'Horizons & Solitude',
    caption: 'Stepping away from screens to reconnect with vastness. Where the mind breathes and thoughts distill into simplicity.',
    date: '2025',
    location: 'Himachal, India',
    category: 'travel',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'ai-ethics-dialogue',
    title: 'Ethical AI & Clinical Governance',
    caption: 'Convening dialogue between clinicians and engineers at the Foundation for Ethical AI in Healthcare.',
    date: '2026',
    location: 'Faridabad, India',
    category: 'philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
];
