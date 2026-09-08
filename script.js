async function includePartial(url, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  try {
    const res = await fetch(url);
    mount.innerHTML = await res.text();
  } catch (e) {
    console.error(`Could not load ${url}. If you're viewing this file directly (file://), run a local server instead — see README.md.`, e);
  }
}

(async () => {
  await includePartial('partials/nav.html', 'site-nav');
  await includePartial('partials/footer.html', 'site-footer');

  // Highlight current page in nav
  const current = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a => {
    if (a.dataset.nav === current) a.classList.add('current');
  });

  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
