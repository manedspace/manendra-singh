# Manendra Kumar Singh — Faculty Website (multi-page)

Plain HTML/CSS/JS, four pages, shared nav + footer loaded via `partials/`.

## Files

```
index.html          Home — hero, stats, current research, highlights
publications.html   Full publication record, grouped by type
experience.html      Education, employment, awards, service, talks
scholars.html        Research group — card grid of supervised scholars
style.css            All styling (design tokens at the top)
script.js            Injects nav/footer partials, mobile menu, active link
partials/nav.html     Shared navigation bar
partials/footer.html  Shared footer
assets/               Photo + downloadable CV PDF
```

## Run it locally

The nav/footer are loaded with `fetch()`, which browsers block on `file://`.
Serve the folder instead:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a repo (e.g. `manendra-singh-site`) and upload every file/folder
   here, keeping the same structure.
2. Settings → Pages → Source → Deploy from a branch → `main` / `/(root)`.
3. Live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Updating the Scholars page

Open `scholars.html`. Each researcher is one `.scholar-card` block. Cards
still waiting on a photo/link are marked in the code so they're easy to find:

- **Photo:** replace the placeholder div —
  `<div class="scholar-photo placeholder">Photo pending</div>` —
  with `<img class="scholar-photo" src="assets/scholars/<name>.jpg" alt="Portrait of <name>">`.
  Drop the photo file into a new `assets/scholars/` folder.
- **Link:** change `<a class="scholar-link placeholder" href="#">Add link</a>`
  to the real URL and drop the `placeholder` class, e.g.
  `<a class="scholar-link" href="https://...">Visit site →</a>`.

## Editing content elsewhere

- **Text:** edit directly in each page's HTML.
- **Colors/fonts/spacing:** CSS variables at the top of `style.css`.
- **Nav links or CV filename:** `partials/nav.html`.
- **Contact info:** `partials/footer.html`.
- **CV PDF:** replace `assets/Manendra-Kumar-Singh-CV.pdf`, same filename,
  or update the link in `partials/nav.html`.
