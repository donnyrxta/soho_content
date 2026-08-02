window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-asset]').forEach((img) => {
    const key = img.getAttribute('data-asset');
    if (window.SOHO_ASSETS && window.SOHO_ASSETS[key]) img.src = window.SOHO_ASSETS[key];
  });
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
