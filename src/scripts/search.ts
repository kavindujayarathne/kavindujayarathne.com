// @ts-expect-error — pagefind generates types at build time, not available in dev
import { PagefindUI } from '@pagefind/default-ui';

function initSearch() {
  const searchContainer = document.getElementById('pagefind-search');
  if (!searchContainer) return;

  // Prevent duplicate instances — check if PagefindUI already rendered
  if (searchContainer.querySelector('.pagefind-ui')) return;

  new PagefindUI({
    element: '#pagefind-search',
    showSubResults: true,
    showImages: false,
    processResult: (result: any) => {
      // Strip trailing slashes to match trailingSlash: 'never' config.
      // Handles both "/path/" and "/path/#anchor" (slash before hash).
      const stripSlash = (url: string) =>
        url.replace(/\/(?=#|$)/, '');

      if (result.url) {
        result.url = stripSlash(result.url);
      }
      if (result.sub_results) {
        for (const sub of result.sub_results) {
          if (sub.url) {
            sub.url = stripSlash(sub.url);
          }
        }
      }
      return result;
    },
  });

  // Handle URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  if (query) {
    const input = searchContainer.querySelector<HTMLInputElement>(
      '.pagefind-ui__search-input'
    );
    if (input) {
      input.value = query;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

// Initialize on page load
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(initSearch);
} else {
  setTimeout(initSearch, 200);
}

// Re-initialize after view transitions
document.addEventListener('astro:after-swap', () => {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(initSearch);
  } else {
    setTimeout(initSearch, 200);
  }
});
