function getPreferredTheme(): string {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

let themeValue = getPreferredTheme();

function reflectPreference(): void {
  document.documentElement.setAttribute('data-theme', themeValue);
  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', `Switch to ${themeValue === 'dark' ? 'light' : 'dark'} mode`);

  const bgColor = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', bgColor);
}

function setPreference(): void {
  localStorage.setItem('theme', themeValue);
  reflectPreference();
}

function setupThemeToggle(): void {
  reflectPreference();
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    themeValue = themeValue === 'dark' ? 'light' : 'dark';
    setPreference();
  });
}

setupThemeToggle();

document.addEventListener('astro:after-swap', () => {
  themeValue = getPreferredTheme();
  setupThemeToggle();
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    if (localStorage.getItem('theme')) return;
    themeValue = isDark ? 'dark' : 'light';
    setPreference();
  });
