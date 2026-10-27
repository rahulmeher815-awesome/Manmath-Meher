# 🌱 KrishiSalah (कृषि सलाह / କୃଷି ସଲାହ)
### Weather-Smart Tomato Crop Advisor for Indian Farmers

A responsive, mobile-first web application designed specifically for Indian tomato growers. **KrishiSalah** combines real-time weather forecasts, crop growth stage tracking, rule-based agronomic recommendations, and visual disease scouting into a simple, high-contrast, bilingual interface (English, Hindi, Odia).

---

## 📌 1. What KrishiSalah Does

- **Interactive Tomato Crop Calendar:** Calculates your exact Days After Transplanting (DAT) from your planting date and provides stage-by-stage agronomic advice (Nursery, Transplanting, Vegetative, Flowering, Fruit Development, Harvesting).
- **Real-Time Weather & Forecasts:** Automatically connects to the free Open-Meteo API to fetch local temperature, relative humidity, rain probability, wind speed, and a 7-day agronomic forecast for major Indian tomato hubs (Kolar, Chittoor, Nashik, Pune, Mayurbhanj, Dhenkanal, Varanasi, etc.) or your device GPS.
- **Rule-Based Farming Recommendations:** Provides contextual advice explaining *why* each recommendation appears (e.g., checking soil moisture before irrigating, waterlogging furrow clearance after rain, high-temperature flower drop prevention).
- **Weather-Related Disease Risk Monitor:** Continuously evaluates environmental risk levels for Early Blight, Late Blight, Tomato Yellow Leaf Curl Virus (ToLCV), and Bacterial Wilt based on microclimate triggers.
- **Visual Tomato Leaf Doctor:** Lets farmers take or upload leaf photos and compare them against an agronomic guide of common foliar symptoms.
- **AI Farming Assistant:** Chat advisor covering tomato cultivation, fertilizers (NPK), irrigation schedules, pests, and blossom-end rot with built-in instant knowledge support and modular backend preparation.
- **Trilingual Localization:** Complete interface translations for English, Hindi (हिंदी), and Odia (ଓଡ଼ିଆ).
- **100% Privacy & Zero-Database Setup:** Saves all farm profiles and preferences directly in browser `localStorage`. No accounts, passwords, or paid subscriptions required.

---

## 💻 2. Technologies Used

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Weather API:** [Open-Meteo](https://open-meteo.com/) (Free, open-access, non-commercial weather API without requiring API keys)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans, Noto Sans Devanagari, and Noto Sans Oriya (Google Fonts)
- **Local Storage:** Browser Web Storage API (`localStorage`)
- **AI Integration Architecture:** Prepared for Google Gemini API via a secure backend proxy (`GEMINI_API_KEY`)

---

## 📥 3. How to Install Node.js

Before running the project on your personal computer (Windows, Mac, or Linux):

1. Visit the official website: **[https://nodejs.org/](https://nodejs.org/)**
2. Download the **LTS (Long Term Support)** version (recommended version: Node.js 18, 20, or 22).
3. Run the downloaded installer and follow the standard installation wizard.
4. Verify that Node.js and npm are installed by opening your Terminal (or Command Prompt) and typing:
   ```bash
   node -v
   npm -v
   ```

---

## 📦 4. How to Install Dependencies

1. Clone or download the repository to your local computer.
2. Open your terminal, navigate into the project directory:
   ```bash
   cd krishisalah
   ```
3. Run the install command:
   ```bash
   npm install
   ```
   This downloads and installs React, Vite, TypeScript, and Lucide icons into a local `node_modules` folder.

---

## 🚀 5. How to Run the Website Locally (Development)

Start the local development server:
```bash
npm run dev
```

Once started, open your web browser and navigate to:
```
http://localhost:3000
```
Any edits you make to the code will automatically refresh in your browser in real-time.

---

## 🏗️ 6. How to Create a Production Build

To compile and optimize the website for production:
```bash
npm run build
```
This generates a production-ready, minified static site inside the `dist/` folder. You can test this build locally using:
```bash
npm run preview
```

---

## 🐙 7. How to Upload the Code to GitHub

Follow these steps to publish your code to GitHub:

1. Create a free account at [GitHub.com](https://github.com) if you do not have one.
2. Click **New Repository**, name it `krishisalah`, choose **Public**, and click **Create repository** (do not initialize with a README since one already exists).
3. In your local project terminal, run:
   ```bash
   # Initialize Git repository
   git init

   # Stage all project files
   git add .

   # Commit changes
   git commit -m "Initial commit of KrishiSalah website"

   # Rename branch to main
   git branch -M main

   # Link your local repository to your new GitHub repository
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/krishisalah.git

   # Push your code to GitHub
   git push -u origin main
   ```

---

## 🌐 8. How to Deploy the Website Online

Because KrishiSalah is built as a static Single Page Application (SPA), it can be deployed **completely free** on any modern hosting provider:

### Option A: Vercel (Easiest & Recommended)
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New Project** and select your `krishisalah` GitHub repository.
3. Framework Preset will automatically detect **Vite**.
4. Click **Deploy**. Your website will be live in 30 seconds with a free `.vercel.app` domain!

### Option B: Netlify
1. Go to [https://www.netlify.com](https://www.netlify.com) and log in with GitHub.
2. Click **Add new site > Import an existing project**.
3. Select `krishisalah`.
4. Build command: `npm run build` | Publish directory: `dist`.
5. Click **Deploy Site**.

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.ts`, add `base: '/krishisalah/',`
3. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
4. Run `npm run build && npm run deploy`.

---

## ⚙️ 9. Which Features Work Without a Backend?

The basic KrishiSalah website is **100% functional without any backend server or paid API**:
- ✅ **Tomato Crop Calendar & Stage Calculations:** Runs entirely in browser JavaScript.
- ✅ **Weather Forecasts:** Connects directly from the browser to Open-Meteo's open public API without API keys or accounts.
- ✅ **Rule-Based Recommendations:** Evaluated client-side using agronomic logic algorithms.
- ✅ **Disease Risk Indicators:** Calculated from live weather variables in real time.
- ✅ **Farm Profile & Location Saving:** Stored in browser `localStorage`.
- ✅ **Offline Smart Agronomic Assistant:** Uses an embedded verified tomato advisory knowledge base answering common questions in English, Hindi, and Odia.
- ✅ **Leaf Photo Selection:** Lets farmers select and inspect photos on their device.

---

## 🤖 10. How to Configure Optional AI Integration Securely

To connect Google Gemini API for arbitrary conversational queries:

1. **Security Rule:** Never put your `GEMINI_API_KEY` into browser-facing code or Vite variables (avoid `VITE_` prefix for secrets) as users could inspect the web bundle and steal the key.
2. Deploy a lightweight serverless backend proxy (e.g. Node.js Express or Cloudflare Worker / Vercel Serverless Function) that receives user messages, calls Gemini API on the server side using `process.env.GEMINI_API_KEY`, and returns only the response text.
3. Configure your frontend `.env` file with your backend proxy URL:
   ```env
   VITE_AI_BACKEND_URL=https://your-api.vercel.app/api/chat
   ```
4. If no backend is configured, KrishiSalah automatically and smoothly uses its built-in smart knowledge engine so farmers always receive immediate assistance.

---

## 📜 Regulatory & Safety Disclaimer

KrishiSalah is an agronomic advisory tool for informational reference only. Weather conditions indicate risk potential and do not confirm disease presence. Farmers are advised to physically inspect plants and follow instructions from certified agricultural extension specialists and product labels before applying any chemical fertilizers or pesticides.

Built with dedication for Indian farmers.
