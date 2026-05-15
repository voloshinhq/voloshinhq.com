const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

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
    const current = getEffectiveTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storage.set('theme', next);
  });
}

const countWords = (text) => (text.trim().match(/[A-Za-zА-Яа-я0-9@']+/g) || []).length;
const minutesFromWords = (words) => Math.max(1, Math.ceil(words / 180));

document.querySelectorAll('[data-read-minutes]').forEach((node) => {
  let words = 0;
  const holder = node.closest('[data-word-count]');
  if (holder?.dataset.wordCount) words = Number(holder.dataset.wordCount) || 0;

  if (!words) {
    const post = document.querySelector('.post-full');
    if (post) words = countWords(post.innerText || post.textContent || '');
  }

  node.textContent = String(minutesFromWords(words || 1));
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a.post-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === '_blank') return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => {
      window.location.href = link.href;
    }, 220);
  });
});

window.addEventListener('pageshow', () => {
  document.body.classList.remove('is-leaving');
});
