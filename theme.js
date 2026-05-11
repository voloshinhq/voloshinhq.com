document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

root.setAttribute('data-theme', initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

const countWords = (text) => (text.trim().match(/[A-Za-zА-Яа-я0-9@']+/g) || []).length;
const minutesFromWords = (words) => Math.max(1, Math.ceil(words / 100));

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
