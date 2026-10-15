# Prateek Mittal — Personal Atelier & Research Archive

A personal website, research archive, and multi-stream writing codex designed with **Astro 5, Tailwind CSS, MDX, and KaTeX**. Built for effortless updates and published directly via **GitHub Pages**.

---

## 🏛️ Features & Architecture

- **The Two Hemispheres**: Balances empirical AI research (MICCAI 2026, TMLR, ICLR BrainLM, Graph-RAG) with contemplative philosophy, ethics, and poetry (*काव्य*).
- **Multi-Stream Writing Codex**:
  - 🔬 **AI & Science**: Technical deep dives with KaTeX math rendering and code blocks.
  - 🏛️ **Philosophy & Ethics**: Essays on AI governance, epistemology, and bioethics.
  - ✍️ **Poetry & Verse**: Custom contemplative reading mode supporting English and Devanagari stanzas.
  - 🌿 **Memoirs**: Reflections and lived experiences.
- **Scholar's Archive**: Complete catalog of 15+ journal articles, conference papers, and preprints with one-click **BibTeX citation copy** and DOI links.
- **Visual Moments Diary**: Curated photography and snapshots of conferences, laboratory whiteboards, and quiet reflections.
- **Automated GitHub Pages Publishing**: Push to `main`, and GitHub Actions builds and publishes in under 45 seconds.

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## ✍️ How to Update Content

### 1. Adding a New Blog Post or Poem
Simply create a new markdown file in `src/content/writing/my-post.md`:

```markdown
---
title: "Your Title Here"
description: "Brief summary"
date: 2026-10-15
category: "poetry" # options: "ai-research" | "philosophy" | "poetry" | "memoirs"
tags: ["Poetry", "Reflection"]
coverImage: "/images/writing/your-image.jpg" # (optional)
featured: true # (optional)
readingTime: "4 min read"
epigraph: "An optional quote or verse"
language: "both" # options: "en" | "hi" | "both"
---

Your content here in Markdown, with KaTeX math: $\Delta f + \lambda f = 0$.
```

### 2. Adding a New Paper / Publication
Add an entry to `src/data/publications.ts`.

### 3. Adding Personal Photos & Moments
- Profile photo: replace `public/images/avatar.svg` or drop `public/images/avatar.jpg` and update `src/data/profile.ts`.
- Gallery photos: drop pictures in `public/images/moments/` and add an entry in `src/data/moments.ts`.

---

## 🌐 Publishing to GitHub Pages

1. **Create a repository** on GitHub named `<username>.github.io` (e.g., `prateekmittal154.github.io`).
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of personal atelier & portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository on GitHub &rarr; **Settings** &rarr; **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
   - Your site will automatically build and go live at `https://<username>.github.io/`!
