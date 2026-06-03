const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }
};

const applyTheme = (theme) => root.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');

const savedTheme = storage.get('theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  applyTheme(savedTheme);
} else {
  root.removeAttribute('data-theme');
}

const getEffectiveTheme = () => {
  const manual = root.getAttribute('data-theme');
  if (manual === 'dark' || manual === 'light') return manual;
  return mediaQuery.matches ? 'dark' : 'light';
};

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storage.set('theme', next);
  });
}
