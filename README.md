# Kanish Tuteja — AI automation consultant, Toronto

One-page site. Plain HTML, CSS and JS: no build step.

Live: https://kanishtuteja.github.io/Corporate-Automations/

## Edit
- Links (booking, email, LinkedIn): `CONFIG` at the top of `script.js`
- French text: `FR` object in `script.js` (English lives in `index.html`)
- Styles: `styles.css`

## Preview locally
```
python -m http.server 8765
```
then open http://localhost:8765

## Adding a custom domain later
1. Add a file named `CNAME` containing just the domain, e.g. `kanishtuteja.com`
2. Point the domain's DNS at GitHub Pages (GitHub repo → Settings → Pages shows the records)
3. Replace `https://kanishtuteja.github.io/Corporate-Automations/` in `index.html`, `robots.txt` and `sitemap.xml`
