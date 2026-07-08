// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navtoggle');
const navLinks = document.getElementById('navlinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '56px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#F6F2E9';
    navLinks.style.padding = '16px 24px';
    navLinks.style.borderBottom = '1px solid #DCD3BE';
    navLinks.style.gap = '16px';
  });
}

// Scroll-spy for nav links
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.navlinks a');
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.navlinks a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => io.observe(r));
