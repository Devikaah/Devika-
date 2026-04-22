# Devika KG — Portfolio Website 🚀

A professional, glassmorphism-themed portfolio built with React + Vite.

**Design**: Glassmorphism · Electric Blue/Cyan · Smooth Scroll Reveal Animations

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Steps

```bash
# 1. Unzip the portfolio folder
# 2. Open terminal inside the folder and run:

npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 File Structure

```
portfolio/
├── public/
│   └── images/         ← Your photos & screenshots
│       ├── profile.jpg
│       ├── sports-dashboard.png
│       ├── dairy-dashboard.png
│       └── cert-ybi.png
├── src/
│   ├── components/     ← All section components
│   ├── hooks/          ← Scroll reveal hook
│   ├── App.jsx         ← Main app
│   ├── main.jsx        ← Entry point
│   └── index.css       ← Global styles & design tokens
└── package.json
```

---

## ✏️ Customization Guide

### 1. Contact Form Setup (REQUIRED)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy your Form ID
3. Open `src/components/Contact.jsx`
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

### 2. Resume Download
- Place your resume PDF in `public/images/` as `DEVIKA_KG_Resume.pdf`
- The download buttons in Navbar and Hero will work automatically

### 3. Update Content
- **Hero**: Edit `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Certifications**: Edit `src/components/Certifications.jsx`

### 4. Colors
All colors are in `src/index.css` under `:root { ... }`:
```css
--accent-cyan: #00d4ff;   /* Main accent */
--accent-blue: #0066ff;   /* Secondary accent */
--bg-primary: #050d1a;    /* Background */
```

---

## 🌐 Deployment

### Netlify (Free, Recommended)
1. Run `npm run build`
2. Upload the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### GitHub Pages
1. Push code to GitHub
2. Connect to Netlify or Vercel for auto-deployment

---

## 📦 Tech Stack
- **React 18** + **Vite 4**
- **Pure CSS** (no CSS frameworks)
- **Intersection Observer API** for scroll reveals
- **Formspree** for contact form

---

Made with 💙 for Devika KG
