// Tour: show the screen for whichever step is in the middle of the viewport.
const steps = [...document.querySelectorAll('.step')];
const shots = [...document.querySelectorAll('.tour-stage img')];
if (steps.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const step = entry.target.dataset.step;
      steps.forEach(s => s.classList.toggle('on', s.dataset.step === step));
      shots.forEach(s => s.classList.toggle('on', s.dataset.step === step));
    }
  }, { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach(s => observer.observe(s));
}

// Watermark demo: tap the address to cover or uncover it, like the share screen.
const address = document.querySelector('.card-addr');
address?.addEventListener('click', () => {
  const hidden = address.classList.toggle('hidden');
  address.setAttribute('aria-pressed', String(hidden));
});
