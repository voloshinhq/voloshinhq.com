const revealItems = document.querySelectorAll('.reveal');

document.querySelectorAll('[data-lang-switch]').forEach((link) => {
  link.addEventListener('click', () => {
    try { localStorage.setItem('language-choice', link.dataset.langSwitch || ''); } catch (_) {}
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const progress = document.querySelector('.read-progress span');
if (progress) {
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max <= 0 ? 0 : (window.scrollY / max) * 100;
    progress.style.width = Math.min(100, Math.max(0, value)) + '%';
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

const postItems = Array.from(document.querySelectorAll('[data-post-item]'));
const loadMore = document.querySelector('[data-load-more]');
const filter = document.querySelector('[data-tag-filter]');
let activeTag = 'all';
let visibleCount = 15;

const updatePosts = () => {
  const matching = postItems.filter((item) => {
    if (activeTag === 'all') return true;
    return (item.dataset.tags || '').split(',').includes(activeTag);
  });

  postItems.forEach((item) => {
    item.hidden = true;
  });

  matching.slice(0, visibleCount).forEach((item) => {
    item.hidden = false;
  });

  if (loadMore) {
    loadMore.hidden = matching.length <= visibleCount;
  }
};

if (postItems.length) {
  updatePosts();
}

if (loadMore) {
  loadMore.addEventListener('click', () => {
    visibleCount += 15;
    updatePosts();
  });
}

if (filter) {
  filter.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-tag]');
    if (!button) return;
    activeTag = button.dataset.tag || 'all';
    visibleCount = 15;
    filter.querySelectorAll('button').forEach((node) => node.classList.toggle('active', node === button));
    updatePosts();

    const url = new URL(window.location.href);
    if (activeTag === 'all') url.searchParams.delete('tag');
    else url.searchParams.set('tag', activeTag);
    window.history.replaceState(null, '', url);
  });

  const urlTag = new URL(window.location.href).searchParams.get('tag');
  if (urlTag) {
    const button = filter.querySelector('button[data-tag="' + CSS.escape(urlTag) + '"]');
    if (button) button.click();
  }
}
