window.addEventListener('DOMContentLoaded', () => {
  window.SOHO_ASSETS = window.SOHO_ASSETS || {};
  window.SOHO_ASSETS.hero = 'https://raw.githubusercontent.com/donnyrxta/pixel-prophet-92/preview/homepage-premium-assets-live/public/images/home/soho-cartoon-hero.webp';

  const heroStyles = document.createElement('style');
  heroStyles.textContent = `
    .hero { position: relative; isolation: isolate; overflow: hidden; }
    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background:
        linear-gradient(90deg, rgba(3,15,83,.99) 0%, rgba(5,20,103,.94) 36%, rgba(5,20,103,.42) 51%, rgba(5,20,103,.08) 66%, transparent 78%),
        radial-gradient(circle at 77% 42%, rgba(34,200,247,.13), transparent 29%);
    }
    .hero-grid { position: relative; z-index: 2; grid-template-columns: .88fr 1.12fr; }
    .hero-copy { position: relative; z-index: 4; }
    .hero-media { position: relative; z-index: 2; min-height: 615px; overflow: visible; }
    .hero-media::before { display: none; }
    .hero-media img {
      position: absolute;
      inset: 0 -4% 0 -4%;
      width: 108%;
      height: 100%;
      min-height: 615px;
      object-fit: cover;
      object-position: 52% center;
      opacity: 1;
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.68) 7%, #000 14%, #000 100%);
      mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.68) 7%, #000 14%, #000 100%);
      filter: saturate(1.05) contrast(1.025);
      animation: sohoCharacterFloat 7s ease-in-out infinite;
    }
    .hero-media > span { z-index: 5; }
    @keyframes sohoCharacterFloat {
      0%, 100% { transform: translate3d(0,0,0) scale(1.005); }
      50% { transform: translate3d(0,-7px,0) scale(1.015); }
    }
    @media (max-width: 780px) {
      .hero { min-height: 820px; }
      .hero::before {
        z-index: 2;
        background:
          linear-gradient(90deg, rgba(3,14,78,.99) 0%, rgba(4,17,93,.96) 42%, rgba(4,17,93,.63) 62%, rgba(4,17,93,.24) 84%, transparent 100%),
          linear-gradient(180deg, transparent 0%, transparent 68%, rgba(2,10,58,.94) 100%);
      }
      .hero-grid { display: block; min-height: 820px; }
      .hero-copy { position: relative; z-index: 5; width: min(100%,630px); padding: 3.2rem 0 2.6rem; }
      .hero-media { position: absolute; inset: 0 -31% 0 16%; z-index: 1; min-height: 820px; pointer-events: none; }
      .hero-media img {
        inset: 0;
        width: 100%;
        height: 100%;
        min-height: 820px;
        object-position: 52% center;
        opacity: .78;
        -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 13%, #000 34%, #000 100%);
        mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 13%, #000 34%, #000 100%);
      }
      .hero-proof { position: relative; z-index: 5; max-width: 520px; }
    }
    @media (max-width: 520px) {
      .hero, .hero-grid, .hero-media, .hero-media img { min-height: 860px; }
      .hero-media { inset: 0 -54% 0 12%; }
      .hero-media img { object-position: 50% center; opacity: .7; }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-media img { animation: none; }
    }
  `;
  document.head.appendChild(heroStyles);

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
