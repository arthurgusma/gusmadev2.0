const tooltips = document.querySelectorAll('.tooltip');

function toggleTooltip() {
  const tooltip = this.querySelector('.tooltiptext');
  
  tooltip.classList.toggle('active');
}

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', toggleTooltip);
});