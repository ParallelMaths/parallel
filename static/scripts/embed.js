// =============================================================================
// Embed height reporting (used when ?embed is set and inside an iframe)
// =============================================================================


const MESSAGE_TYPE = 'parallel:embed:height';

export default function initEmbed() {
  const root = document.documentElement;
  if (!root.classList.contains('embed') || window.parent === window) return;

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
