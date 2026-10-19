# Chhavi Varshney — Developer Portfolio

A responsive React + Vite portfolio with a dark, violet-accented visual style.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Open the terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Personalize before publishing
1. Add your resume PDF to `public/resume.pdf`. Create the `public` folder if needed. The View Resume button expects this exact path.
2. In `src/App.jsx`, replace each project's `github` URL with the exact repository URL. The current URLs point to your GitHub profile, not individual repositories.
3. Add each live demo URL if available. The current design intentionally does not invent demo links.
4. Check your contact details and all profile links.
5. Update any project descriptions so they precisely match the current state of your projects.

## Build for production
```bash
npm run build
npm run preview
```

## Publish
You can deploy the project using Vercel or Netlify. For Vercel, import the GitHub repository and use the default Vite build settings (`npm run build`, output directory `dist`).
