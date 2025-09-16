# Minimal Dark Portfolio

A clean, minimal, dark-themed single-page portfolio with tabs: About, Blog, Projects, and Contact. Built with vanilla HTML/CSS/JS for speed and simplicity.

## Local preview

- Open `index.html` in a browser.

## Customize

- Edit text in `index.html` sections (`about`, `blog`, `projects`, `contact`).
- Replace the Formspree endpoint in the contact form with your own or remove the form action.
- Tweak colors in `styles.css` under the `:root` variables.

## Deploy to GitHub Pages

Option A: User/organization site (recommended)
1. Create a new GitHub repository named `<username>.github.io`.
2. Copy the contents of this `Portfolio/` folder into the repo root.
3. Commit and push. Pages will auto-publish at `https://<username>.github.io`.

Option B: Project site
1. Create any repository name (e.g., `portfolio`).
2. Copy the contents of this `Portfolio/` folder into the repo root.
3. In GitHub: Settings → Pages → Build and deployment → Source: `Deploy from a branch`.
4. Select branch `main` (or `master`) and folder `/ (root)`. Save.
5. Your site will be available at `https://<username>.github.io/<repo>`.

### Optional: Git commands

```bash
git init
git add .
git commit -m "Initial minimal dark portfolio"
git branch -M main
git remote add origin git@github.com:<username>/<repo>.git
git push -u origin main
```

## Notes

- The nav is hash-based; each tab updates the URL (`#about`, `#blog`, etc.).
- The indicator animates to the current tab and adjusts on resize.
- No build tools required; all static assets.

