window.addEventListener('DOMContentLoaded', () => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'assets/v2/review-fixes.css';
  document.head.appendChild(stylesheet);

  const button = document.getElementById('menu');
  const mobile = document.getElementById('mobile');

  button?.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    button.textContent = open ? 'Close' : 'Menu';
    button.setAttribute('aria-expanded', String(open));
  });

  mobile?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobile.classList.remove('open');
    button.textContent = 'Menu';
    button.setAttribute('aria-expanded', 'false');
  }));
});