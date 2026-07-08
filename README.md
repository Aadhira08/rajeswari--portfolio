# Dr. P. Rajeswari — Faculty Portfolio

A static site (HTML/CSS/JS, no build step). Files:
- `index.html` — the page
- `style.css` — styles
- `script.js` — nav + scroll behavior
- `assets/dr-rajeswari.jpg` — photo
- `assets/Dr_P_Rajeswari_CV.pdf` — downloadable resume

## Deploy: GitHub + Vercel (step by step)

### 1. Create a GitHub account (skip if you have one)
Go to github.com → Sign up → verify your email.

### 2. Create a new repository
- Click the **+** icon (top right) → **New repository**
- Name it e.g. `rajeswari-portfolio`
- Keep it **Public**
- Don't add a README/gitignore (we already have the files)
- Click **Create repository**

### 3. Upload the files
On the new repo's page:
- Click **uploading an existing file**
- Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder (drag the whole folder — GitHub keeps the folder structure)
- Scroll down, click **Commit changes**

*(Alternative, using git on your computer):*
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rajeswari-portfolio.git
git push -u origin main
```

### 4. Sign up for Vercel
Go to vercel.com → **Sign Up** → choose **Continue with GitHub** (this links the two automatically).

### 5. Import the project
- On the Vercel dashboard, click **Add New** → **Project**
- Find `rajeswari-portfolio` in the list → click **Import**
- Framework preset: leave as **Other** (it's a static site, no build needed)
- Click **Deploy**

Vercel builds and deploys in under a minute and gives you a live URL like:
`https://rajeswari-portfolio.vercel.app`

### 6. Every future update
Whenever you edit a file on GitHub (or push via git), Vercel automatically redeploys — no extra steps.

### 7. (Optional) Custom domain
In the Vercel project → **Settings** → **Domains** → add your own domain (e.g. `drrajeswari.com`) and follow the DNS instructions shown.

## Editing content later
- Text: open `index.html`, find the section, edit the text between tags
- Colors/fonts: open `style.css`, edit the `:root` variables at the top
- Photo: replace `assets/dr-rajeswari.jpg` with a new image of the same filename
- Resume PDF: replace `assets/Dr_P_Rajeswari_CV.pdf` with an updated version, same filename
