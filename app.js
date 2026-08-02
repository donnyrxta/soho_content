window.addEventListener('DOMContentLoaded', () => {
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