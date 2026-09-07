# Swarnbhoomi Construction & Promoters — Website

**Live Preview Stack:** React 18 + Vite 5  
**Theme:** Light · Classic · Grand (Ivory, Maroon, Gold)  
**RERA:** CGRERA300824A000826 | **ISO:** 9001:2015 — E2024049781

---

## 📁 Folder Structure

```
swarnbhoomi/
├── index.html                  ← App shell, loads fonts
├── package.json                ← Dependencies
├── vite.config.js              ← Vite config
│
├── public/
│   └── images/                 ← Add your property photos here
│       ├── hero1.jpg
│       ├── project-*.jpg
│       └── ...
│
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root: assembles all sections
    ├── index.css               ← Global styles, CSS tokens
    │
    └── components/
        ├── Header.jsx/.css     ← Fixed navbar with mobile drawer
        ├── Hero.jsx/.css       ← Full-bleed slideshow hero
        ├── About.jsx/.css      ← Company info, certs, stats
        ├── Projects.jsx/.css   ← Portfolio with filter tabs
        ├── Location.jsx/.css   ← Map + proximity table
        ├── Contact.jsx/.css    ← Enquiry form + info cards
        └── Footer.jsx/.css     ← CTA band + full footer
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Deploy /dist to GitHub Pages / Netlify / Vercel
```

---

## ✏️ What to Update Before Going Live

| File | Update |
|---|---|
| `Hero.jsx` | Replace Unsplash images with actual project photos |
| `Projects.jsx` | Update project names, locations, images |
| `Contact.jsx` | Add real phone number |
| `Location.jsx` | Fix Google Maps embed URL with exact coordinates |
| `Footer.jsx` | Add real email, phone number |
| `App.jsx` | Update WhatsApp number in FloatButtons |

---

## 🎨 Color Tokens (in src/index.css)

| Token | Value | Usage |
|---|---|---|
| `--maroon` | `#7B1C2E` | Primary brand color |
| `--gold` | `#B8860B` | Accent, dividers |
| `--ivory` | `#FAF7F2` | Background |
| `--charcoal` | `#2C2C2C` | Body text |

---

## 📋 Data Used from Client Documents

| Source | Data Extracted |
|---|---|
| RERA Certificate | Reg No. CGRERA300824A000826, validity 30-Aug-2024 to 29-Aug-2029 |
| ISO Certificate | ISO 9001:2015, Cert No. E2024049781, valid till 18/04/2027 |
| Both Docs | Company name, address: G-37 Swarn Chambers, Highcourt Road, Bilaspur — 495001 |
