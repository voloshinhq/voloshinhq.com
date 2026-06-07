const revealItems = document.querySelectorAll('.reveal');

document.querySelectorAll('[data-calendly-popup]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const url = link.getAttribute('href');
    event.preventDefault();
    if (!url) return;

    const openPopup = () => {
      if (!window.Calendly) return;
      window.Calendly.initPopupWidget({ url });
    };

    if (window.Calendly) {
      openPopup();
      return;
    }

    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', openPopup, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.addEventListener('load', openPopup, { once: true });
    document.head.append(script);
  });
});

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
