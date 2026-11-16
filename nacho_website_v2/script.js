const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  document.body.classList.toggle('nav-open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => observer.observe(element));
