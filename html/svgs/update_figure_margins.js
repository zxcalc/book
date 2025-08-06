function updateSVGPadding() {
  document.querySelectorAll('.svg-diagram').forEach(el => {
    const height = el.offsetHeight;
    const padding = height * 0.4; // 20% of actual height
    el.style.marginTop = `${padding}px`;
    el.style.marginBottom = `${padding}px`;
  });
}

// Run on page load and optionally on resize
window.addEventListener('load', updateSVGPadding);
window.addEventListener('resize', updateSVGPadding);