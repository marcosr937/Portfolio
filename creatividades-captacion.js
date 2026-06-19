document.addEventListener('DOMContentLoaded', () => {

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Animate result bars when they enter view
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.dataset.width;
        setTimeout(() => { bar.style.width = target; }, 200);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.result-bar').forEach(bar => barObserver.observe(bar));

  // Nav scroll shadow
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(226,255,0,0.1)'
      : 'var(--border)';
  }, { passive: true });

});
