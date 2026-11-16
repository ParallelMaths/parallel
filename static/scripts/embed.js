// =============================================================================
// Embed height reporting (used when ?embed is set and inside an iframe)
// =============================================================================


const MESSAGE_TYPE = 'parallel:embed:height';

export default function initEmbed() {
  const root = document.documentElement;
  if (!root.classList.contains('embed')) return;

  // Embed mode hides the privacy modal, so only allow it inside a frame.
  if (window.parent === window) {
    const url = new URL(window.location.href);
    if (!url.searchParams.has('embed')) return;
    url.searchParams.delete('embed');
    return window.location.replace(url.toString());
  }

  // Links to other pages open in the top window; in-page anchors stay in the frame.
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href]');
    if (!link || link.target) return;
    const samePage = link.href.split('#')[0] === window.location.href.split('#')[0];
    if (!samePage) link.target = '_top';
  }, true);

  let lastHeight = 0;
  let frame = 0;

  const post = () => {
    frame = 0;
    const height = Math.ceil(root.getBoundingClientRect().height);
    // Body is hidden (height 0) while reloading after a submission.
    if (!height || height === lastHeight) return;
    lastHeight = height;
    window.parent.postMessage({type: MESSAGE_TYPE, height}, '*');
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(post);
  };

  if (window.ResizeObserver) {
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    observer.observe(document.body);
  } else {
    window.setInterval(schedule, 500);
  }

  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  document.addEventListener('load', schedule, true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);

  schedule();
}
