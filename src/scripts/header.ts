// Mobile navigation toggle
function setupMobileNav() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const closeNav = document.querySelector('.close-nav');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  const toggleNav = () => {
    navLinks?.classList.toggle('active');
    body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
  };

  mobileNavToggle?.addEventListener('click', toggleNav);
  closeNav?.addEventListener('click', toggleNav);
}

setupMobileNav();

document.addEventListener('astro:after-swap', () => {
  setupMobileNav();
});
